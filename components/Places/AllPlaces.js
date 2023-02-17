import PlaceItem from './PlaceItem';

export default function AllPosts(props) {
  return (
    <div className='grid grid-cols-1 gap-y-32 my-16'>
      {props.placesData.map((place) => (
        <PlaceItem
          id={place.id}
          key={place.id}
          title={place.title}
          description={place.description}
          author={place.author}
          image={place.image}
        />
      ))}
    </div>
  );
}
