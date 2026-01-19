export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  channelName: string;
  views: number;
  uploadedAt: string;
  duration: string;
}

export const videos: Video[] = [
  {
    id: "1",
    title: "Build a YouTube Clone with Next.js",
    thumbnail: "/Thumbnails/t1.avif",
    channelName: "CodeWithAdam",
    views: 15432,
    uploadedAt: "3 days ago",
    duration: "12:45",
  },
  {
    id: "2",
    title: "React Basics in 10 Minutes",
    thumbnail: "/Thumbnails/t2.avif",
    channelName: "Frontend School",
    views: 8921,
    uploadedAt: "1 week ago",
    duration: "9:10",
  },
  {
    id: "3",
    title: "Why the Next.js App Router Matters",
    thumbnail: "/Thumbnails/t3.avif",
    channelName: "Dev Explained",
    views: 23011,
    uploadedAt: "2 weeks ago",
    duration: "15:02",
  },
  {
    id: "4",
    title: "JavaScript Array Methods You Must Know",
    thumbnail: "/Thumbnails/t4.avif",
    channelName: "JS Daily",
    views: 41200,
    uploadedAt: "5 days ago",
    duration: "11:28",
  },
  {
    id: "5",
    title: "CSS Grid vs Flexbox (When to Use What)",
    thumbnail: "/Thumbnails/t5.avif",
    channelName: "Design Simplified",
    views: 19876,
    uploadedAt: "6 days ago",
    duration: "13:54",
  },
  {
    id: "6",
    title: "I Built the Same App in React and Next.js",
    thumbnail: "/Thumbnails/t6.avif",
    channelName: "Build Stuff",
    views: 28765,
    uploadedAt: "1 week ago",
    duration: "18:40",
  },
  {
    id: "7",
    title: "Stop Using useEffect Like This",
    thumbnail: "/Thumbnails/t7.avif",
    channelName: "React Tips",
    views: 52344,
    uploadedAt: "4 days ago",
    duration: "7:59",
  },
  {
    id: "8",
    title: "How Routing Works in Next.js",
    thumbnail: "/Thumbnails/t8.avif",
    channelName: "Next Mastery",
    views: 13490,
    uploadedAt: "2 weeks ago",
    duration: "10:21",
  },
  {
    id: "9",
    title: "Beginner Git & GitHub Crash Course",
    thumbnail: "/Thumbnails/t9.avif",
    channelName: "Dev Foundations",
    views: 76433,
    uploadedAt: "3 weeks ago",
    duration: "22:15",
  },
  {
    id: "10",
    title: "This VS Code Setup Changed Everything",
    thumbnail: "/Thumbnails/t10.avif",
    channelName: "Productive Dev",
    views: 45512,
    uploadedAt: "1 week ago",
    duration: "8:42",
  },
  {
    id: "11",
    title: "Understanding Server vs Client Components",
    thumbnail: "/Thumbnails/t11.avif",
    channelName: "Next.js Academy",
    views: 16789,
    uploadedAt: "5 days ago",
    duration: "14:06",
  },
  {
    id: "12",
    title: "I Tried Coding Without Google for a Day",
    thumbnail: "/Thumbnails/t12.avif",
    channelName: "Dev Challenges",
    views: 98214,
    uploadedAt: "2 days ago",
    duration: "16:33",
  },
];
