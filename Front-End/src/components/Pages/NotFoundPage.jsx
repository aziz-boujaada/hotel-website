import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <FontAwesomeIcon icon={faExclamationTriangle} className="text-orange-500 text-[100px] mb-6" />
      <h1 className="text-6xl font-bold text-orange-500 mb-4">404</h1>
      <p className="text-2xl text-gray-700 mb-8">Page Not Found</p>
      <a
        href="/"
        className="px-6 py-3 bg-orange-500 text-white rounded-full text-lg hover:bg-orange-600 transition"
      >
        Go Back Home
      </a>
    </div>
  );
}
