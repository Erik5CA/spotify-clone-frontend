import { Song } from "@/types";
import { create } from "zustand";

interface PlayerStore {
  currentSong: Song | null;
  isPlaying: boolean;
  queue: Song[];
  currentIndex: number;

  intializeQueue: (songs: Song[]) => void;
  playAlbum: (songs: Song[], startIndex: number) => void;
  setCurrentSong: (song: Song | null) => void;
  togglePlay: () => void;
  playNextSong: () => void;
  playPreviousSong: () => void;
}

export const usePlayerStore = create<PlayerStore>()((set, get) => ({
  currentSong: null,
  isPlaying: false,
  queue: [],
  currentIndex: -1,

  intializeQueue: (songs: Song[]) => {
    set({
      queue: songs,
      currentIndex: get().currentIndex === -1 ? 0 : get().currentIndex,
      currentSong: get().currentSong || songs[0],
    });
  },

  playAlbum: (songs: Song[], startIndex = 0) => {
    if (songs.length === 0) return;
    const song = songs[startIndex];
    set({
      queue: songs,
      currentIndex: startIndex,
      currentSong: song,
      isPlaying: true,
    });
  },

  setCurrentSong: (song: Song | null) => {
    if (!song) return;
    const songIndex = get().queue.findIndex((s) => s._id === song._id);
    set({
      currentSong: song,
      currentIndex: songIndex !== -1 ? songIndex : get().currentIndex,
      isPlaying: true,
    });
  },

  togglePlay: () => {
    set({
      isPlaying: !get().isPlaying,
    });
  },

  playNextSong: () => {
    const { currentIndex, queue } = get();
    const nextIndex = currentIndex + 1;
    // is there is a next song
    if (nextIndex < queue.length) {
      set({
        currentIndex: nextIndex,
        currentSong: queue[nextIndex],
        isPlaying: true,
      });
    } else {
      set({
        currentIndex: 0,
        currentSong: queue[0],
        isPlaying: false,
      });
    }
  },

  playPreviousSong: () => {
    const { currentIndex, queue } = get();
    const previousIndex = currentIndex - 1;
    // is there is a previous song
    if (previousIndex >= 0) {
      set({
        currentIndex: previousIndex,
        currentSong: queue[previousIndex],
        isPlaying: true,
      });
    } else {
      set({
        currentIndex: queue.length - 1,
        currentSong: queue[queue.length - 1],
        isPlaying: false,
      });
    }
  },
}));
