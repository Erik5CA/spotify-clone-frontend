import { useMusicStore } from "@/stores/useMusicStore";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formateDate } from "@/lib/utils";
import { Calendar, Trash2 } from "lucide-react";

const AlbumTable = () => {
  const { albums, isLoadingAlbum, error, deleteAlbum } = useMusicStore();

  if (isLoadingAlbum) {
    return (
      <div className="flex items-center justify-between py-8">
        <div className="text-zinc-400">Loading Songs...</div>
      </div>
    );
  }

  if (error) {
    <div className="flex items-center justify-between py-8">
      <div className="text-red-400">{error}</div>
    </div>;
  }
  return (
    <Table>
      <TableHeader>
        <TableRow className="hover:bg-zinc-700/50">
          <TableHead className="w-[50px]"></TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Artist</TableHead>
          <TableHead>Release Date</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {albums.map((album) => (
          <TableRow key={album._id} className="hover:bg-zinc-700/50">
            <TableCell>
              <img
                src={album.imageUrl}
                alt={album.title}
                className="size-10 rounded object-cover"
                width={"640"}
                height={"640"}
              />
            </TableCell>
            <TableCell className="font-medium">{album.title}</TableCell>
            <TableCell>{album.artist}</TableCell>
            <TableCell className="flex items-center gap-1 text-zinc-400">
              <Calendar className="size-4" />
              {formateDate(album.createdAt)}
            </TableCell>
            <TableCell className="text-right">
              <div className="flex gap-2 justify-end">
                <Button
                  variant={"ghost"}
                  size={"sm"}
                  className="text-red-400 hover:text-red-300 hover:bg-red-400/10"
                  onClick={() => deleteAlbum(album._id)}
                >
                  <Trash2 className="size-4" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AlbumTable;
