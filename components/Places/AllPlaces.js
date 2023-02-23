import PlaceItem from './PlaceItem';

export default function AllPlaces(props) {
  return (
    <div className='grid grid-cols-1 gap-y-32 my-16'>
      {props.placesData.map((place) => (
        <PlaceItem
          id={place._id}
          key={place._id}
          title={place.title}
          description={place.description}
          creatorName={place.creatorName}
          image={place.image}
        />
      ))}
    </div>
  );
}
