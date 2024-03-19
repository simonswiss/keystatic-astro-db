import axios from "axios"

import {
  useQuery,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
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
  const queryClient = useQueryClient()
  const query = useQuery({
    queryKey: ["likes"],
    queryFn: async () => {
      const { data } = await axios.get(`/api/likes/${slug}`)
      return data
    },
  })

  return (
    <span className="text-slate-500">
      {query.status === "pending" && (
        <Spinner className="size-4 animate-spin" />
      )}
      {query.status === "success" && (
        <>
          ({query.data.length} {query.data.length === 1 ? "like" : "likes"})
        </>
      )}
    </span>
  )
}
