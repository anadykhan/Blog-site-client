import { useQueries, useQuery } from "@tanstack/react-query";
import axios from "axios";

// utility functions
const sortByWordCount = (dataArray) => {
    if (!dataArray) {
        return [];
    }

    // Sort the dataArray based on the word count of longDescription
    const sortedArray = dataArray.slice().sort((a, b) => {
        const wordCountA = a.longDescription.split(/\s+/).length;
        const wordCountB = b.longDescription.split(/\s+/).length;

        return wordCountB - wordCountA; // Sort in descending order
    });

    return sortedArray;
};

const fetchBlogs = () => {
    return axios.get("http://localhost:8080/blogs")
};

const fetchUsers = () => {
    return axios.get('http://localhost:8080/users')
}

const fetchComments = () => {
    return axios.get('http://localhost:8080/comments')
}

const fetchUsersByID = (ownerID) => {
    return axios.get(`http://localhost:8080/users/${ownerID}`);
}

const fetchBlogsByID = (blogID) => {
    return axios.get(`http://localhost:8080/blogs/${blogID}`)
}

const fetchBlogCommentsByID = (blogID) => {
    return axios.get(`http://localhost:8080/blogs/comments/${blogID}`)
}

export const useBlogsData = () => {
    return useQuery({
        queryKey: ["blogs"],
        queryFn: fetchBlogs,
    })
}

export const useUsersData = () => {
    return useQuery({
        queryKey: ["users"],
        queryFn: fetchUsers,
    })
}

export const useCommentsData = () => {
    return useQuery({
        queryKey: ['comments'],
        queryFn: fetchComments
    })
}

export const useBlogsByIdData = (blogID) => {
    const { data, isLoading } = useQuery({
        queryKey: ['blogs', blogID],
        queryFn: () => fetchBlogsByID(blogID)
    })

    return { data, isLoading }
}

export const useUsersByIdData = (ownerID) => {
    const { data, isLoading } = useQuery({
        queryKey: ['users', ownerID],
        queryFn: () => fetchUsersByID(ownerID),
    });

    return { name: data?.data, isLoading };
};


export const useSortedBlogsData = () => {
    const { data, isLoading } = useBlogsData(); // Use useBlogsData instead of useQuery directly
    const sortedData = data ? sortByWordCount(data.data) : [];
    return { sortedData, isLoading };
};

export const useSortedBlogsOwnersData = () => {
    const { data: sortedBlogsData, isLoading: blogsLoading } = useSortedBlogsData();
    const { data: usersData, isLoading: usersLoading } = useUsersData();

    return { sortedBlogsData, blogsLoading, usersData, usersLoading };
}

export const useBlogWithOwnerData = (blogID) => {
    const blogQuery = useQuery({
        queryKey: ["blogs", blogID],
        queryFn: () => fetchBlogsByID(blogID),
    });

    const ownerQuery = useQuery({
        enabled: !!blogQuery?.data?.data?.owner, 
        queryKey: ["users", blogQuery?.data?.data?.owner],
        queryFn: () => fetchUsersByID(blogQuery?.data?.data?.owner),
    });

    const commentQuery = useQuery({
        enabled: !!ownerQuery?.data?.data?._id,
        queryKey: ['comments', ownerQuery?.data?.data?._id],
        queryFn: () => fetchBlogCommentsByID(blogID)
    })


    return {
        blogData: blogQuery.data?.data,
        blogLoading: blogQuery.isLoading,
        ownerData: ownerQuery?.data?.data,
        ownerLoading: ownerQuery?.isLoading,
        commentData: commentQuery?.data?.data,
        commentLoading: commentQuery?.isLoading
    };
};
