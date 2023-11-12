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

const fetchUsersByID = (ownerID) => {
    return axios.get(`http://localhost:8080/users/${ownerID}`);
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
