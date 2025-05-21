import { useAuthContext } from "@/context/AuthContext";
import socket from "@/lib/config/socket";
import { getChatMessages } from "@/lib/services/chats";
import { GetChatMessagesResponse } from "@/types/chatResponse";
import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";
import { useEffect } from "react";

type Props = {
	chatId: string;
};

function useGetChatMessages({ chatId }: Props) {
    const { user } = useAuthContext()
	const { data, isError, error, isFetchingNextPage, fetchNextPage, isPending } = useInfiniteQuery<
		GetChatMessagesResponse,
		Error,
		InfiniteData<GetChatMessagesResponse, unknown>,
		string[],
		string | undefined
	>({
		queryKey: ["chatMessages", chatId],
		queryFn: ({ pageParam }) => getChatMessages(chatId, pageParam ?? ""),
		initialPageParam: undefined,
		getNextPageParam: (lastPage) => {
			const lastMessage = lastPage.messages[lastPage.messages.length - 1]

			if (!lastMessage) return undefined

			return lastMessage.id
		},
	})

    useEffect(() => {
        if (!user) return

        socket.emit("joinChat", { chatId, userId: user.id })

        return () => {
            socket.disconnect()
        }
    }, [])

	return {
        data,
        isError,
        error,
        isFetchingNextPage,
        fetchNextPage,
        isPending,
    }
}

export default useGetChatMessages;
