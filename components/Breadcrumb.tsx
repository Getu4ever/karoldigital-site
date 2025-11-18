"use client";

import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

interface BreadcrumbProps {
  current: string;
}

export default function Breadcrumb({ current }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex items-center gap-2 text-sm text-gray-500">
        <li>
          <Link
            href="/"
            className="hover:text-[#102f35] transition font-medium"
          >
            Home
          </Link>
        </li>

        <FaChevronRight className="text-gray-400 text-xs" />

        <li>
          <Link
            href="/services"
            className="hover:text-[#102f35] transition font-medium"
          >
            Services
          </Link>
        </li>

        <FaChevronRight className="text-gray-400 text-xs" />

        <li className="text-[#411b3f] font-semibold">{current}</li>
      </ol>
    </nav>
  );
}
