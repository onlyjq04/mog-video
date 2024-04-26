import { Input } from "@/components/ui/input"

interface VideoSelectorProps {
     onSelected: (url: string) => void
}
export default function VideoSelector({onSelected}: VideoSelectorProps) {
    return <Input type="file" />
}