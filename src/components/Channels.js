import ChannelLine from "../ui/ChannelLine";
import ChannelLabel from "../ui/ChannelLabel";
import User from "../ui/User";
import { ReactComponent as MicrophoneImage } from "../images/microphone.svg";
import { ReactComponent as SettingsImage } from "../images/settings.svg";
import { ReactComponent as MegaphoneImage } from "../images/megaphone.svg";

import { channels } from "../data/channels";

export default function Channel() {
  return (
    <section className='relative h-full bg-dark-secondary overflow-auto scrollbar-hide pt-10 pb-16'>
      {channels.map((allChannels) => {
        return (
          <div key={allChannels.channel_label} className='mt-6'>
            <ChannelLabel label={allChannels.channel_label} />
            {
              <div>
                {allChannels.channels.map((channel) => (
                  <ChannelLine channel_name={channel.name} key={channel.name} />
                ))}
              </div>
            }
          </div>
        );
      })}

      <div className='fixed left-18 bottom-0 w-72 bg-zinc-700'>
        <div className='flex justify-between p-2'>
          <User username='MentalLin' info='#3434' />
          <div className='flex'>
            <MicrophoneImage className='w-5 mx-1.5 text-grey cursor-pointer hover:text-yellow-200 duration-200' />
            <MegaphoneImage className='w-5 mx-1.5 text-grey cursor-pointer hover:text-yellow-200 duration-200' />
            <SettingsImage className='w-5 mx-1.5 text-grey cursor-pointer hover:text-yellow-200 duration-200' />
          </div>
        </div>
      </div>
    </section>
  );
}
