import { useParams } from "react-router-dom"
import ListPost from "../assets/components/ListPost"

export default function SubCategoria() {
    const { subcategoria } = useParams()

    return (
        <ListPost url={`/post?subcategoria=${subcategoria}`} />
    )
}