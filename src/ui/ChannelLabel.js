import { ReactComponent as ChevronDown } from "../images/chevron-down.svg";

export default function ChannelLabel({ label, setIsVisibleChannels }) {
  return (
    <div
      className='flex flex-row text-sm  text-grey hover:text-neutral-300 mx-2 my-1 cursor-pointer'
      onClick={() =>
        setIsVisibleChannels((currentVisibility) => {
          return [
            ...currentVisibility.filter((item) => item.channel_label !== label),
            {
              channel_label: label,
              visible: !currentVisibility.find((item) => item.channel_label === label).visible,
            },
          ];
        })
      }
    >
      <ChevronDown className='w-3' />
      <span className='pl-2'>{label.toUpperCase()}</span>
    </div>
  );
}
