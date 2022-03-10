import { StayPreview } from '../cmps/StayPreview.jsx';

export function StayList({ stays }) {
  if (!stays.length) return <h1>There are no places to show</h1>;
  return (
    <section className='stay-list center-layout'>
      {stays.map((stay) => (
        <StayPreview key={stay._id} stay={stay} />
      ))}
    </section>
  );
}
