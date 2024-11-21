import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogDescription,
  DialogHeader,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { axiosInstance } from "@/lib/axios";
import { useAuth } from "@clerk/clerk-react";
import { Plus, Upload } from "lucide-react";
import { useRef, useState } from "react";

const AddAlbumDialog = () => {
  const { getToken } = useAuth();
  const [albumDialogOpen, setAlbumDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [newAlbum, setnewAlbum] = useState({
    title: "",
    artist: "",
    releaseYear: "",
  });
  const [files, setFiles] = useState<{
    image: File | null;
  }>({
    image: null,
  });
  const imageFileRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      if (!files.image) {
        return toast({ title: "Please upload an image file" });
      }
      const formData = new FormData();

      formData.append("title", newAlbum.title);
      formData.append("artist", newAlbum.artist);
      formData.append("releaseYear", newAlbum.releaseYear);

      formData.append("imageFile", files.image);
      const token = await getToken();
      await axiosInstance.post("/admin/albums", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      setnewAlbum({
        title: "",
        artist: "",
        releaseYear: "",
      });
      setFiles({
        image: null,
      });
      toast({ title: "Album added successfully" });
    } catch (error: any) {
      toast({
        title: "Failed to add album" + error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={albumDialogOpen} onOpenChange={setAlbumDialogOpen}>
      <DialogTrigger asChild>
        <Button className="bg-emerald-500 hover:bg-emerald-600 text-black">
          <Plus className="mr-2 size-4" />
          Add Album
        </Button>
      </DialogTrigger>

      <DialogContent className="bg-zinc-900 border-zinc-700 max-h-[80vh] overflow-auto">
        <DialogHeader>
          <DialogTitle>Add New Album</DialogTitle>
          <DialogDescription>
            Add new album to your music library
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <input
            type="file"
            accept="image/*"
            ref={imageFileRef}
            hidden
            onChange={(e) =>
              setFiles((prev) => ({ ...prev, image: e.target.files![0] }))
            }
          />

          {/* Image Upload Area */}
          <div
            className="flex items-center justify-center p-6 border-2 border-dashed border-zinc-700 rounded-lg cursor-pointer"
            onClick={() => imageFileRef.current?.click()}
          >
            <div className="text-center">
              {files.image ? (
                <div className="space-y-2">
                  <div className="text-sm text-emerald-500">Image Selected</div>
                  <div className="text-xs text-zinc-400">
                    {files.image?.name.slice(0, 20)}
                  </div>
                </div>
              ) : (
                <>
                  <div className="p-3 bg-zinc-800 rounded-full inline-block mb-2">
                    <Upload className="size-6 text-zinc-400" />
                  </div>
                  <div className="text-sm text-zinc-400 mb-2">
                    Upload Artwork
                  </div>
                  <Button variant="outline" size="sm" className="text-xs">
                    Choose File
                  </Button>
                </>
              )}
            </div>
          </div>

          {/* Audio Upload Area */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Title</label>
            <Input
              value={newAlbum.title}
              placeholder="Title of the song"
              onChange={(e) =>
                setnewAlbum({ ...newAlbum, title: e.target.value })
              }
              className="bg-zinc-800 border-zinc-700"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Artist</label>
            <Input
              value={newAlbum.artist}
              placeholder="Artist of the song"
              onChange={(e) =>
                setnewAlbum({ ...newAlbum, artist: e.target.value })
              }
              className="bg-zinc-800 border-zinc-700"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Realesed Year</label>
            <Input
              type="number"
              placeholder="Ej: 2022"
              min="0"
              value={newAlbum.releaseYear}
              onChange={(e) =>
                setnewAlbum({
                  ...newAlbum,
                  releaseYear: e.target.value || "",
                })
              }
              className="bg-zinc-800 border-zinc-700"
            />
          </div>
        </div>

        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => setAlbumDialogOpen(false)}
            disabled={isLoading}
          >
            Cancel
          </Button>
          <Button onClick={handleSubmit} disabled={isLoading}>
            {isLoading ? "Uploading..." : "Add Album"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddAlbumDialog;
