"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function MutualFundMenu({ open, onClose }) {
    const [subOpen, setSubOpen] = useState(null);

    if (!open) return null;

    return (
        <div className="absolute top-full left-0 bg-white shadow-lg rounded-md mt-2 w-56 z-50">
            <Link
                href="/funds"
                onClick={onClose}
                className="block px-4 py-2 hover:bg-gray-100"
            >
                म्युच्युअल फंड म्हणजे काय?
            </Link>

            {/* Mutual Fund Types */}
            <div className="relative">
                <button
                    onClick={() =>
                        setSubOpen(subOpen === "types" ? null : "types")
                    }
                    className="w-full flex justify-between items-center px-4 py-2 hover:bg-gray-100"
                >
                    म्युच्युअल फंडाचे प्रकार
                    <ChevronRight size={16} />
                </button>

                {subOpen === "types" && (
                    <div className="absolute top-0 left-full bg-white shadow-lg rounded-md w-56">
                        <Link
                            href="/funds/fund-types/equity-type"
                            onClick={onClose}
                            className="block px-4 py-2 hover:bg-gray-100"
                        >
                            समभाग आधारित
                        </Link>
                        <Link
                            href="/funds/fund-types/debt_type"
                            onClick={onClose}
                            className="block px-4 py-2 hover:bg-gray-100"
                        >
                            कर्ज रोखे
                        </Link>
                        <Link
                            href="/funds/fund-types/capital_markets_type"
                            onClick={onClose}
                            className="block px-4 py-2 hover:bg-gray-100"
                        >
                            भांडवली बाजार
                        </Link>
                    </div>
                )}
            </div>

            {/* Share Bazaar */}
            <div className="relative">
                <button
                    onClick={() =>
                        setSubOpen(subOpen === "share" ? null : "share")
                    }
                    className="w-full flex justify-between items-center px-4 py-2 hover:bg-gray-100"
                >
                    शेअर बाजार
                    <ChevronRight size={16} />
                </button>

                {subOpen === "share" && (
                    <div className="absolute top-0 left-full bg-white shadow-lg rounded-md w-56">
                        <Link
                            href="/funds/shares/capital_markets"
                            onClick={onClose}
                            className="block px-4 py-2 hover:bg-gray-100"
                        >
                            भांडवली बाजार
                        </Link>
                        <Link
                            href="/funds/shares/f&o"
                            onClick={onClose}
                            className="block px-4 py-2 hover:bg-gray-100"
                        >
                            फ्युचर्स आणि ऑप्शन्स
                        </Link>
                    </div>
                )}
            </div>

            <Link
                href="/funds/our_funds_services"
                onClick={onClose}
                className="block px-4 py-2 hover:bg-gray-100"
            >
                सेवा व सुविधा
            </Link>
        </div>
    );
}
