import { VideoCard } from "./VideoCard"

const VIDEOS = [{
    title: "How to learn coding in 30 days | 30 day plan | Code with me",
    image: "capture.png",
    author: "Raman singh",
    views: "2M",
    timestamp: "1 days ago",
},{
    title: "How to learn coding in 30 days | 30 day plan | Code with me",
    image: "capture.png",
    author: "Raman singh",
    views: "2M",
    timestamp: "1 days ago",
},{
    title: "How to learn coding in 30 days | 30 day plan | Code with me",
    image: "capture.png",
    author: "Raman singh",
    views: "2M",
    timestamp: "1 days ago",
},{
    title: "How to learn coding in 30 days | 30 day plan | Code with me",
    image: "capture.png",
    author: "Raman singh",
    views: "2M",
    timestamp: "1 days ago",
    },
{
    title: "How to learn coding in 30 days | 30 day plan | Code with me",
    image: "capture.png",
    author: "Raman singh",
    views: "2M",
    timestamp: "1 days ago",
},{
    title: "How to learn coding in 30 days | 30 day plan | Code with me",
    image: "capture.png",
    author: "Raman singh",
    views: "2M",
    timestamp: "1 days ago",
},{
    title: "How to learn coding in 30 days | 30 day plan | Code with me",
    image: "capture.png",
    author: "Raman singh",
    views: "2M",
    timestamp: "1 days ago",
},{
    title: "How to learn coding in 30 days | 30 day plan | Code with me",
    image: "capture.png",
    author: "Raman singh",
    views: "2M",
    timestamp: "1 days ago",
},{
    title: "How to learn coding in 30 days | 30 day plan | Code with me",
    image: "capture.png",
    author: "Raman singh",
    views: "2M",
    timestamp: "1 days ago",
},{
    title: "How to learn coding in 30 days | 30 day plan | Code with me",
    image: "capture.png",
    author: "Raman singh",
    views: "2M",
    timestamp: "1 days ago",
},{
    title: "How to learn coding in 30 days | 30 day plan | Code with me",
    image: "capture.png",
    author: "Raman singh",
    views: "2M",
    timestamp: "1 days ago",
},{
    title: "How to learn coding in 30 days | 30 day plan | Code with me",
    image: "capture.png",
    author: "Raman singh",
    views: "2M",
    timestamp: "1 days ago",
},{
    title: "How to learn coding in 30 days | 30 day plan | Code with me",
    image: "capture.png",
    author: "Raman singh",
    views: "2M",
    timestamp: "1 days ago",
},{
    title: "How to learn coding in 30 days | 30 day plan | Code with me",
    image: "capture.png",
    author: "Raman singh",
    views: "2M",
    timestamp: "1 days ago",
},{
    title: "How to learn coding in 30 days | 30 day plan | Code with me",
    image: "capture.png",
    author: "Raman singh",
    views: "2M",
    timestamp: "1 days ago",
},{
    title: "How to learn coding in 30 days | 30 day plan | Code with me",
    image: "capture.png",
    author: "Raman singh",
    views: "2M",
    timestamp: "1 days ago",
},{
    title: "How to learn coding in 30 days | 30 day plan | Code with me",
    image: "capture.png",
    author: "Raman singh",
    views: "2M",
    timestamp: "1 days ago",
},{
    title: "How to learn coding in 30 days | 30 day plan | Code with me",
    image: "capture.png",
    author: "Raman singh",
    views: "2M",
    timestamp: "1 days ago",
}]


//md: and lg; are responsive tags which tailwind gives out of the box to adjust the number
//of grid components on screen as per the size of the window
export const VideoGrid = () => {
    return <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-1">
        {VIDEOS.map(video => <div>
            <VideoCard
                title={video.title}
                image={video.image}
                author={video.author}
                views={video.views}
                timestamp={video.timestamp}
            ></VideoCard>
        </div>)}
    </div>
}