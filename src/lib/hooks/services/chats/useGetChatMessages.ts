import { getChatMessages } from "@/lib/services/chats";
import { GetChatMessagesResponse } from "@/types/chatResponse";
import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";

type Props = {
	chatId: string;
};

function useGetChatMessages({ chatId }: Props) {
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
