import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { BlogPost } from "apps/blog/types.ts";

export interface CTA {
  id?: string;
  href?: string;
  text?: string;
  outline?: boolean;
}

/** @title {{{title}}} */
export interface Post {
  url?: string;
  title?: string;
  author?: string;
  excerpt?: string;
  image?: ImageWidget;
  date?: string;
  readingTime?: string;
  tags?: string[];
}

export interface Props {
  posts?: BlogPost[]; // Aceita uma lista de posts
}

const DEFAULT_IMAGE =
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/682eb374-def2-4e85-a45d-b3a7ff8a31a9";

export default function MainPost({
  posts = [
    {
      slug: "/",
      title: "Title of blogpost #1",
      authors: [{ name: "Name of the author", email: "author@deco.cx" }],
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: DEFAULT_IMAGE,
      date: "01 Apr 2024",
      categories: [{ name: "Tag#1", slug: "tag-1" }],
      content: "Blog Post Content",
    },
    {
      slug: "/second-post",
      title: "Title of blogpost #2",
      authors: [{ name: "Second Author", email: "author2@deco.cx" }],
      excerpt: "This is a second example of a blog post.",
      image: DEFAULT_IMAGE,
      date: "15 Apr 2024",
      categories: [{ name: "Tag#2", slug: "tag-2" }],
      content: "Second Blog Post Content",
    },
  ],
}: Props) {
  return (
    <div class="container lg:mx-auto mx-2 text-sm">
      <div class="flex flex-col lg:flex-row justify-between gap-8">
        {posts.slice(0, 2).map((post) => (
          <a
            href={`/blog/${post.slug}`}
            class="border bg-white justify-between border-secondary flex flex-col overflow-hidden lg:w-1/2 gap-[0]"
            key={post.slug}
          >
            {post.image && (
              <Image
                width={656}
                height={500}
                class="object-fit w-full z-10"
                sizes="(max-width: 656px) 100vw, 30vw"
                src={post.image || ""}
                alt={post.image}
                decoding="async"
                loading="lazy"
              />
            )}
            <div class="p-6 space-y-4 bg-white">
              <div class="space-y-2">
                <h3 class="text-lg text-[#031D41] font-bold">{post.title}</h3>
                <p class="text-sm text-[#031D41]">{post.excerpt}</p>
              </div>

              <div class="flex flex-wrap justify-between items-center gap-2">
                <span class="text-[#031D41] text-xs font-bold">
                  {post.date
                    ? new Date(post.date).toLocaleDateString("pt-BR", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })
                    : ""}
                </span>
                {/* <span>•</span> */}
                {post.categories && (
                  <div class="flex flex-wrap  !my-0 gap-2">
                    {post.categories?.map((category) => (
                      <div
                        class="rounded-badge border border-secondary px-4 py-1 text-xs bg-[#EAEAEB] text-primary font-bold"
                        key={category.slug}
                      >
                        {category.name}
                      </div>
                    ))}
                  </div>
                )}
                <span class="hidden">{post.authors[0]?.name}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
