
import type { Stat } from "@/types/Stat";
import type { Headline } from "@/types/Headline";
import type { Widget } from "@/types/Widget";

export interface Stats extends Omit<Headline, 'classes'>, Widget {
    stats?: Array<Stat>;
}