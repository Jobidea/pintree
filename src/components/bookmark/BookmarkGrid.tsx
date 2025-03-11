"use client";

import { useState, useEffect } from "react";
import { BookmarkCard } from "./BookmarkCard";
import { FolderCard } from "./FolderCard";
import { Skeleton } from "@/components/ui/skeleton";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SearchBar } from "@/components/search/SearchBar";
import {  useSearchParams, useRouter, usePathname } from "next/navigation";


// 定义组件所需的接口类型
interface BookmarkGridProps {
  bookmarks: {
    title: string
    url: string
    icon?: string
    description?: string
    isFeatured?: boolean
    collection?: {
      name: string
      slug: string
    }
    folder?: {
      name: string
    }
  }[]
}

// 文件夹接口
interface Folder {
  id: string;
  name: string;
  icon?: string;
}

// 书签接口
interface Bookmark {
  id: string;
  title: string;
  url: string;
  description?: string;
  icon?: string;
  isFeatured: boolean;
  collection?: { name: string; slug: string; };
  folder?: { name: string; slug: string; };
}

// 面包屑导航接口
interface BreadcrumbItem {
  id: string;
  name: string;
}

// 子文件夹数据接口
interface SubfolderData {
  id: string;
  name: string;
  icon?: string;
  items: Array<FolderItem | BookmarkItem>;
  totalBookmarks: number;
  bookmarkCount: number;
}

// 文件夹项目接口
interface FolderItem {
  type: 'folder';
  id: string;
  name: string;
  icon?: string;
}

// 书签项目接口
interface BookmarkItem {
  type: 'bookmark';
  id: string;
  title: string;
  url: string;
  description?: string;
  icon?: string;
  isFeatured: boolean;
}

export function BookmarkGrid({ bookmarks }: BookmarkGridProps) {
  return (
    <div className="grid grid-cols-1 gap-4">
      {bookmarks.map((bookmark) => (
        <BookmarkCard
          key={bookmark.url}
          title={bookmark.title}
          url={bookmark.url}
          icon={bookmark.icon}
          description={bookmark.description}
          isFeatured={bookmark.isFeatured}
          collection={bookmark.collection}
          folder={bookmark.folder}
        />
      ))}
    </div>
  )
}