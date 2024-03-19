import axios from "axios"

import {
  useQuery,
  QueryClient,
  QueryClientProvider,
  useIsFetching,
} from "@tanstack/react-query"
import Spinner from "./spinner"

type Props = {
  slug: string
}

const queryClient = new QueryClient()

export default function LikeCounter({ slug }: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component slug={slug} />
    </QueryClientProvider>
  )
}

function Component({ slug }: Props) {
  const isFetching = useIsFetching()
  const query = useQuery({
    queryKey: ["likes", slug],
    queryFn: async () => {
      const { data } = await axios.get(`/api/likes/${slug}`)
      return data
    },
  })

  const isUpdating =
    query.status === "pending" || query.isFetching || isFetching

  return (
    <>
      <span className="text-slate-500">
        {isUpdating ? <Spinner className="size-4 animate-spin" /> : null}
        {query.status === "success" && (
          <span>
            ({query.data.likesCount}{" "}
            {query.data.likesCount === 1 ? "like" : "likes"})
          </span>
        )}
      </span>
    </>
  )
}
