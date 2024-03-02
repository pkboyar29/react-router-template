import { Link } from "react-router-dom";

function NotFoundPage() {
   return (
      <div>
         <h1>Not found</h1>
         <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
         <div>Go <Link to="/">home</Link></div>
      </div>
   );
}

export default NotFoundPage;