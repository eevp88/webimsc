import type { CallToAction } from "@/types/CallToAction";
import type { Headline } from "@/types/Headline";
import type { Widget } from "@/types/Widget";
import type { Image } from "@/types/Image";

export interface Steps extends Omit<Headline, 'classes'>, Widget {
    items: Array<{
      title: string;
      description?: string;
      icon?: string;
      classes?: Record<string, string>;
    }>;
    callToAction?: string | CallToAction;
    image?: string | Image;
    isReversed?: boolean;
  }