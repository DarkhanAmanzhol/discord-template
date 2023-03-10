import MembersLabel from "../ui/MembersLabel";
import User from "../ui/User";
import { users } from "../data/users";
import { useRef } from "react";

const sortStatuses = (a, b) => {
  return a.status < b.status;
};

export default function Members() {
  const sortedUsers = users.sort(sortStatuses);
  const currentUserStatus = useRef();

  return (
    <section className='h-full bg-dark-secondary overflow-auto scrollbar-hide pt-10 px-2'>
      {sortedUsers.map((user) => {
        if (currentUserStatus.current !== user.status) {
          currentUserStatus.current = user.status;
          return (
            <div key={user.username}>
              <MembersLabel label={user.status} />
              <User username={user.username} info={user.current_state} />
            </div>
          );
        }
        return (
          <div key={user.username}>
            <User username={user.username} info={user.current_state} />
          </div>
        );
      })}
    </section>
  );
}
