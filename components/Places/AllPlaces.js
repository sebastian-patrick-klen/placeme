import { Parallax } from '@react-spring/parallax';
import PlaceItem from './PlaceItem';

const data = [
  {
    id: 'p1',
    title: 'Divoká Šárka',
    author: 'Sebastian',
    description:
      'Přírodní rezervace Divoká Šárka je místem, kde si dobijete baterky, pokud chcete utéct před ruchem velkoměsta.',
    image: '/images/places/p1.jpg',
  },
  {
    id: 'p2',
    title: 'Prokopské Údolí',
    author: 'Sebastian',
    description:
      'Přírodní rezervace Prokopské Údolí je místem, kde si dobijete baterky, pokud chcete utéct před ruchem velkoměsta.',
    image: '/images/places/p2.jpg',
  },
  {
    id: 'p1',
    title: 'Divoká Šárka',
    author: 'Sebastian',
    description:
      'Přírodní rezervace Divoká Šárka je místem, kde si dobijete baterky, pokud chcete utéct před ruchem velkoměsta.',
    image: '/images/places/p1.jpg',
  },
  {
    id: 'p2',
    title: 'Prokopské Údolí',
    author: 'Sebastian',
    description:
      'Přírodní rezervace Prokopské Údolí je místem, kde si dobijete baterky, pokud chcete utéct před ruchem velkoměsta.',
    image: '/images/places/p2.jpg',
  },
  {
    id: 'p1',
    title: 'Divoká Šárka',
    author: 'Sebastian',
    description:
      'Přírodní rezervace Divoká Šárka je místem, kde si dobijete baterky, pokud chcete utéct před ruchem velkoměsta.',
    image: '/images/places/p1.jpg',
  },
  {
    id: 'p2',
    title: 'Prokopské Údolí',
    author: 'Sebastian',
    description:
      'Přírodní rezervace Prokopské Údolí je místem, kde si dobijete baterky, pokud chcete utéct před ruchem velkoměsta.',
    image: '/images/places/p2.jpg',
  },
  {
    id: 'p1',
    title: 'Divoká Šárka',
    author: 'Sebastian',
    description:
      'Přírodní rezervace Divoká Šárka je místem, kde si dobijete baterky, pokud chcete utéct před ruchem velkoměsta.',
    image: '/images/places/p1.jpg',
  },
  {
    id: 'p2',
    title: 'Prokopské Údolí',
    author: 'Sebastian',
    description:
      'Přírodní rezervace Prokopské Údolí je místem, kde si dobijete baterky, pokud chcete utéct před ruchem velkoměsta.',
    image: '/images/places/p2.jpg',
  },
  {
    id: 'p1',
    title: 'Divoká Šárka',
    author: 'Sebastian',
    description:
      'Přírodní rezervace Divoká Šárka je místem, kde si dobijete baterky, pokud chcete utéct před ruchem velkoměsta.',
    image: '/images/places/p1.jpg',
  },
  {
    id: 'p2',
    title: 'Prokopské Údolí',
    author: 'Sebastian',
    description:
      'Přírodní rezervace Prokopské Údolí je místem, kde si dobijete baterky, pokud chcete utéct před ruchem velkoměsta.',
    image: '/images/places/p2.jpg',
  },
];

export default function AllPosts() {
  return (
    <div className='grid grid-cols-1 gap-y-32 my-16'>
      {data.map((place) => (
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
