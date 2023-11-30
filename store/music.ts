import { atom, useAtom } from "jotai"
import { Audio } from "expo-av"

export interface PodcastPlayer {
    coverImage: any;
    artist: string;
    audio: any;
    title: string;
    details: string;
}

const musicStore = atom<PodcastPlayer | null>(null);

export const useMusicStore = () => useAtom(musicStore)
