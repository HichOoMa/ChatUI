import { useEffect } from "react";
import { useProfileStore } from "../store/profile";
import Friend from "./friend";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const { fetchFriendList, friends } = useProfileStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!friends) {
      fetchFriendList();
    } else if (friends.length > 0) {
      console.log(friends);
      navigate(`/chat/${friends[0]._id}`);
    }
  }, [friends]);
  return (
    <div className="h-[calc(100vh-4rem)] w-60 fixed bg-base-100">
      {friends.map((friend) => (
        <Friend
          name={friend.name}
          profilePhoto={"https://www.shareicon.net/data/256x256/2016/05/26/771188_man_512x512.png"}
          isOnline={false}
        />
      ))}
    </div>
  );
};

export default Sidebar;
