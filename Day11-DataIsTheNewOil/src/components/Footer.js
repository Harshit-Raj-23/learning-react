export default function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-300 mt-10">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Brand / About */}
            <div>
            <h2 className="text-2xl font-bold text-white mb-3">Foodie Express</h2>
            <p className="text-sm leading-6">
                Bringing your favorite meals to your doorstep — fast, fresh, and full of flavor.
            </p>
            </div>
            
            {/* Links */}
            <div>
            <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Menu</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
            </ul>
            </div>
            
            {/* Socials */}
            <div>
            <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
            <div className="flex space-x-4">
                <a href="#" className="hover:text-white transition-colors">🐦</a>
                <a href="#" className="hover:text-white transition-colors">📘</a>
                <a href="#" className="hover:text-white transition-colors">📷</a>
            </div>
            </div>
        </div>
        
        {/* Bottom Note */}
        <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-500">
            © {new Date().getFullYear()} Foodie Express. All rights reserved.
        </div>
        </footer>
    );
}
