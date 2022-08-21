import './style.css';

interface MessageProps {
  text: string;
  date: string;
  name: string;
  image?: string;
  className?: string;
}

export const Message = ({ text, className, date, name, image }: MessageProps) => {
  return (
    <div className={className}>
      <div className="msg-img-wrapper">
        {image ? <img className="msg-img" src={image} alt={name} /> : <span>Y</span>}
      </div>
      <div className="msg-bubble">
        <div className="msg-info">
          <div className="msg-info-name">{name}</div>
          <div className="msg-info-time">{date}</div>
        </div>

        <div className="msg-text">{text}</div>
      </div>
    </div>
  );
};
