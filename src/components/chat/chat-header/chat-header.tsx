import './styles.css';

interface HeaderProps {
  name: string;
  image: string;
}

export const ChatHeader = ({ name, image }: HeaderProps) => {
  return (
    <div className="header-wrapper">
      <div className='photo-wrapper'>
        <img className='header-photo' src={image} alt={name} />
      </div>
      <div className='name-wrapper'>
        <span>{name}</span>
      </div>
    </div>
  );
};
