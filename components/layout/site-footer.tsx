export function SiteFooter() {
  return (
    <footer className="border-t py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold mb-4">TrustTrade Pakistan</h3>
            <p className="text-sm text-muted-foreground">
              Your trusted escrow service for secure online trading in Pakistan.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>Escrow Service</li>
              <li>Payment Processing</li>
              <li>Dispute Resolution</li>
              <li>Seller Protection</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>Help Center</li>
              <li>Contact Us</li>
              <li>WhatsApp Support</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Refund Policy</li>
              <li>User Agreement</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} TrustTrade Pakistan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}