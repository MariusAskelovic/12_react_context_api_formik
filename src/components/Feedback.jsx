export default function Feedback(status) {
  return (
    <div>
      {status === 'success' && <h3>Sveikiname prisijungus</h3>}
      {status === 'failed' && <h3>Bandykite dar karta</h3>}
    </div>
  );
}
