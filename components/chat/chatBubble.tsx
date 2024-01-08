import Image from "next/image";
import avatar from "@/public/assets/photo-1541101767792-f9b2b1c4f127.avif";
export default function ChatBubble() {
  return (
    <ul className="space-y-5">
      <li className="max-w-lg flex gap-x-2 sm:gap-x-4 me-11">
        <Image
          className="inline-block h-9 w-9 rounded-full"
          src={avatar}
          alt="Image Description"
          width={30}
          height={30}
        />

        <div className="bg-white border border-gray-200 rounded-2xl p-4 space-y-3 dark:bg-slate-900 dark:border-gray-700">
          <h2 className="font-medium text-gray-800 dark:text-white">
            How can we help?
          </h2>
          <div className="space-y-1.5">
            <p className="mb-1.5 text-sm text-gray-800 dark:text-white">
              You can ask questions like:
            </p>
            <ul className="list-disc list-outside space-y-1.5 ps-3.5">
              <li className="text-sm text-gray-800 dark:text-white">
                What&apos;s Preline UI?
              </li>

              <li className="text-sm text-gray-800 dark:text-white">
                How many Starter Pages & Examples are there?
              </li>

              <li className="text-sm text-gray-800 dark:text-white">
                Is there a PRO version?
              </li>
            </ul>
          </div>
        </div>
      </li>

      <li className="flex ms-auto gap-x-2 sm:gap-x-4">
        <div className="grow text-end space-y-3">
          <div className="inline-block bg-blue-600 rounded-2xl p-4 shadow-sm">
            <p className="text-sm text-white">what&apos;s preline ui?</p>
          </div>
        </div>

        <span className="flex-shrink-0 inline-flex items-center justify-center h-[2.375rem] w-[2.375rem] rounded-full bg-gray-600">
          <span className="text-sm font-medium text-white leading-none">
            AZ
          </span>
        </span>
      </li>

      <li className="max-w-lg flex gap-x-2 sm:gap-x-4 me-11">
        <Image
          className="inline-block h-9 w-9 rounded-full"
          src={avatar}
          alt="Image Description"
          width={30}
          height={30}
        />

        <div className="bg-white border border-gray-200 rounded-2xl p-4 space-y-3 dark:bg-slate-900 dark:border-gray-700">
          <p className="text-sm text-gray-800 dark:text-white">
            Preline UI is an open-source set of prebuilt UI components based on
            the utility-first Tailwind CSS framework.
          </p>
          <div className="space-y-1.5">
            <p className="text-sm text-gray-800 dark:text-white">
              Here&apos;re some links to get started
            </p>
            <ul>
              <li>
                <a
                  className="text-sm text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="../docs/index.html"
                >
                  Installation Guide
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="../docs/frameworks.html"
                >
                  Framework Guides
                </a>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
  );
}