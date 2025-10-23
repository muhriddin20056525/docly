import { DocumentType } from "@/types";
import { Button } from "./ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { formatDate } from "@/lib/formatDate";
import { Calendar } from "lucide-react";
import { useRouter } from "next/navigation";

interface DocumentCardProps {
  document: DocumentType;
  deleteDocument: (id: string) => void;
}

export default function DocumentCard({
  document,
  deleteDocument,
}: DocumentCardProps) {
  const router = useRouter();

  return (
    <Card className="w-full max-w-sm rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md hover:translate-y-[-2px] transition-all duration-200">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold text-gray-800 line-clamp-1">
          {document.name}
        </CardTitle>
      </CardHeader>

      <CardContent className="flex items-center text-xs text-gray-500 gap-1 pt-0">
        <Calendar size={14} className="text-gray-400" />
        <span>{formatDate(document.createdAt)}</span>
      </CardContent>

      <CardFooter className="flex justify-end gap-2">
        <Button
          variant="outline"
          size="sm"
          className="rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => router.push(`/my-documents/${document._id}`)}
        >
          View
        </Button>
        <Button
          variant="destructive"
          size="sm"
          className="rounded-lg hover:opacity-90 transition-opacity"
          onClick={() => deleteDocument(document._id)}
        >
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
}
