import React from 'react';
import Temp2 from './temp2';

// Footer
function Temp() {
    const Integrations = ['Shopify', 'Etsy', 'eBay', 'Amazon', 'TikTokShop', 'PrestaShop', 'BigCommerce', 'Wix', 'WooCommerce', 'Squarespace', 'Printify API', 'Printify Pop-Up Store', 'Shutterstock'];
    const Discover = ['Blog','Guides','Products','Etsy print-on-demand','Shopify print-on-demand','Woocommerce print-on-demand','Wix print-on-demand','Squarespace print-on-demand','Make Your Own Shirt','Brands','Pricing','Shipping Rates','Mockup Generator'];
    const StartSelling = ['Custom T-shirts', 'Custom Hoodies', 'Custom Mugs', 'Custom Socks', 'Custom Backpacks', 'Custom Branding', 'Sell on Etsy', 'Sell on Social Media', 'Free T-shirt Designs', 'Custom Products', 'Custom All-Over-Print Hoodies', 'Start a Clothing Line', 'Start POD Business', 'Bulk Orders', 'Transferring To Printify'];
    const Printify = ['Print on Demand', 'Print Providers', 'Experts Program', 'Printify Express Delivery', 'Become a Partner', 'About', 'Printify Quality Promise', 'Jobs', 'Webinars', 'Printing Profits Podcast', 'Contact Us', 'Affiliate', 'Contact Sales', 'POD Glossary', 'Network Fulfillment Status', 'Merchant Protection', 'Security', 'Sitemap'];

    return (
        <div>
            <Temp2 />
            <div className='mx-10 md:mx-12 lg:mx-12 my-12 grid grid-cols-2 gap-6'>
                <div>
                    <h1 className='font-semibold text-lg mb-3'>Integrations</h1>
                    {Integrations.map((item, index) => (
                        <div key={index}>
                            <a href="" className='text-gray-700 w-fit hover:text-green-600'>
                                <p className='pb-2 line-clamp-2'>{item}</p>
                            </a>
                        </div>
                    ))}
                </div>
                <div>
                    <h1 className='font-semibold text-lg mb-3'>Discover</h1>
                    {Discover.map((item, index) => (
                        <div key={index}>
                            <a href="" className='text-gray-700 w-fit hover:text-green-600'>
                                <p className='pb-2 line-clamp-2'>{item}</p>
                            </a>
                        </div>
                    ))}
                </div>
                <div>
                    <h1 className='font-semibold text-lg mb-3'>Start Selling</h1>
                    {StartSelling.map((item, index) => (
                        <div key={index}>
                            <a href="" className='text-gray-700 w-fit hover:text-green-600'>
                                <p className='pb-2 line-clamp-2'>{item}</p>
                            </a>
                        </div>
                    ))}
                </div>
                <div>
                    <h1 className='font-semibold text-lg mb-3'>Printify</h1>
                    {Printify.map((item, index) => (
                        <div key={index}>
                            <a href="" className='text-gray-700 w-fit hover:text-green-600'>
                                <p className='pb-2 line-clamp-2'>{item}</p>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Temp;
