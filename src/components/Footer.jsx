export default function Footer() {
  return (
    <footer className="footer footer-dark mt-5 py-4 text-center text-muted">
      <div className="container colore1">
        <div className="mb-3">
          <a href="#" className="text-muted me-3"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="text-muted me-3"><i className="fab fa-instagram"></i></a>
          <a href="#" className="text-muted me-3"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-muted me-3"><i className="fab fa-youtube"></i></a>
        </div>
        <div className="row">
          <div className="col-md-3">Audio and Subtitles</div>
          <div className="col-md-3">Media Center</div>
          <div className="col-md-3">Privacy</div>
          <div className="col-md-3">Contact Us</div>
        </div>
        <div className="row mt-2">
          <div className="col-md-3">Audio Description</div>
          <div className="col-md-3">Investor Relations</div>
          <div className="col-md-3">Legal Notices</div>
          <div className="col-md-3">Help Center</div>
        </div>
        <p className="mt-3">&copy; 2019 Netflix, Inc.</p>
      </div>
    </footer>
  );
}

