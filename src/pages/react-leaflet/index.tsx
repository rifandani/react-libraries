import dynamic from 'next/dynamic';

export default function ReactLeafletPage() {
  const MapWithNoSSR = dynamic(() => import('../../components/LeafletMap'), {
    ssr: false,
    //   loading: () => (
    //     <div style={{ textAlign: 'center', paddingTop: 20 }}>Chargement…</div>
    //   ),
  });

  return (
    <main>
      <div id="map" style={{ height: '100%', margin: 0, padding: 0 }}>
        <MapWithNoSSR />
      </div>
    </main>
  );
}
