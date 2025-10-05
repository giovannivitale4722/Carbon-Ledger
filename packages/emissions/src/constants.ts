// Enhanced MCC Code to Category Mapping with improved accuracy
export const MCC_CATEGORY_MAP: Record<string, string> = {
  // Fuel & Transportation - Enhanced
  '5541': 'transport.fuel', // Service Stations (with or without Ancillary Services)
  '5542': 'transport.fuel', // Automated Fuel Dispensers
  '5172': 'transport.fuel', // Petroleum and Petroleum Products
  '5983': 'transport.fuel', // Fuel Dealers (Non Automotive)
  '4111': 'transport.publictransit', // Transportation Services (Not Elsewhere Classified)
  '4112': 'transport.publictransit', // Local and Suburban Commuter Passenger Transportation
  // '4131': 'transport.publictransit', // (duplicate) Bus Lines
  '3000': 'transport.airline', // Airlines
  '3001': 'transport.airline', // Airlines
  '3002': 'transport.airline', // Airlines
  '4511': 'transport.airline', // Airlines
  '4119': 'transport.publictransit', // Ambulance Services
  '4121': 'transport.publictransit', // Taxicabs and Limousines
  '4131': 'transport.publictransit', // Bus Lines
  '4214': 'transport.shipping', // Motor Freight Carriers and Trucking
  '4215': 'transport.shipping', // Courier Services
  '4225': 'transport.shipping', // Public Warehousing and Storage
  '4411': 'transport.cruise', // Steamship and Cruise Lines
  '4457': 'transport.boat', // Boat Rentals and Leases
  '4468': 'transport.boat', // Marinas, Marine Service, and Supplies
  // '4511': 'transport.airline', // (duplicate) Airlines, Air Carriers
  '4582': 'transport.airline', // Airports, Flying Fields, and Airport Terminals
  '4722': 'transport.travel', // Travel Agencies and Tour Operators
  '4784': 'transport.travel', // Toll and Bridge Fees
  '4789': 'transport.travel', // Transportation Services (Not Elsewhere Classified)
  
  // Utilities - Enhanced
  '4900': 'utilities.electricity', // Utilities - Electric, Gas, Sanitary and Water
  '4814': 'utilities.telecom', // Telecommunications Equipment and Telephone Sales
  '4816': 'utilities.telecom', // Computer Network/Information Services
  '4821': 'utilities.telecom', // Telegraph Services
  '4829': 'utilities.telecom', // Money Orders - Wire Transfer
  '4899': 'utilities.telecom', // Cable and Other Pay Television Services
  // '4900': 'utilities.electricity', // (duplicate) Utilities
  '4911': 'utilities.electricity', // Electric Services
  '4922': 'utilities.gas', // Natural Gas and Liquefied Petroleum Gas (LPG)
  '4923': 'utilities.gas', // Fuel Oil Sales and Service
  '4924': 'utilities.water', // Water Supply
  '4925': 'utilities.water', // Sanitary Services
  '4931': 'utilities.electricity', // Electric, Gas, and Sanitary Services
  '4932': 'utilities.gas', // Gas Companies
  '4939': 'utilities.other', // Electric, Gas, and Sanitary Services
  '4961': 'utilities.telecom', // Steam and Air Conditioning Supply
  '4999': 'utilities.other', // Utilities
  
  // Groceries - Enhanced
  '5411': 'grocery', // Grocery Stores, Supermarkets
  '5412': 'grocery', // Grocery Stores, Supermarkets
  '5422': 'grocery', // Freezer and Locker Meat Provisioners
  '5451': 'grocery', // Dairy Products Stores
  '5462': 'grocery', // Bakeries
  '5499': 'grocery', // Miscellaneous Food Stores - Convenience Stores and Specialty Markets
  '5310': 'grocery', // Discount Stores
  '5311': 'grocery', // Department Stores
  '5331': 'grocery', // Variety Stores
  '5399': 'grocery', // Miscellaneous General Merchandise
  '5441': 'grocery', // Candy, Nut, and Confectionery Stores
  // '5462': 'grocery', // (duplicate) Bakeries
  // '5499': 'grocery', // (duplicate) Miscellaneous Food Stores
  '5531': 'grocery', // Auto and Home Supply Stores
  '5532': 'grocery', // Automotive Tire Stores
  '5533': 'grocery', // Automotive Parts and Accessories Stores
  // duplicates removed: 5541/5542 already defined in transport section
  '5561': 'grocery', // Recreational Vehicle Dealers
  '5571': 'grocery', // Motorcycle Dealers
  '5592': 'grocery', // Motor Home Dealers
  '5598': 'grocery', // Snowmobile Dealers
  '5599': 'grocery', // Miscellaneous Auto Dealers
  '5611': 'apparel', // Men's and Boy's Clothing and Accessories Stores
  '5621': 'apparel', // Women's Ready-to-Wear Stores
  '5631': 'apparel', // Women's Accessory and Specialty Stores
  '5641': 'apparel', // Children's and Infants' Wear Stores
  '5651': 'apparel', // Family Clothing Stores
  '5661': 'apparel', // Shoe Stores
  '5681': 'apparel', // Furriers and Fur Shops
  '5691': 'apparel', // Men's and Women's Clothing Stores
  '5697': 'apparel', // Tailors, Alterations
  '5698': 'apparel', // Wig and Toupee Stores
  '5699': 'apparel', // Miscellaneous Apparel and Accessory Stores
  '5712': 'home', // Furniture, Home Furnishings, and Equipment Stores, Except Appliances
  '5713': 'home', // Floor Covering Stores
  '5714': 'home', // Drapery, Window Covering, and Upholstery Stores
  '5718': 'home', // Fireplace, Fireplace Screens, and Accessories Stores
  '5719': 'home', // Miscellaneous Home Furnishing Specialty Stores
  '5722': 'home', // Household Appliance Stores
  '5732': 'electronics', // Electronics Stores
  '5733': 'electronics', // Music Stores-Musical Instruments, Pianos, and Sheet Music
  '5734': 'electronics', // Computer Software Stores
  '5735': 'electronics', // Record Stores
  '5811': 'restaurants', // Caterers
  '5812': 'restaurants', // Eating Places, Restaurants
  '5813': 'restaurants', // Drinking Places (Alcoholic Beverages) - Bars, Taverns, Nightclubs, Cocktail Lounges, and Discotheques
  '5814': 'restaurants', // Fast Food Restaurants
  '5912': 'pharmacy', // Drug Stores and Pharmacies
  '5921': 'alcohol', // Package Stores-Beer, Wine, and Liquor
  '5931': 'antiques', // Used Merchandise and Secondhand Stores
  '5932': 'antiques', // Antique Stores
  '5933': 'antiques', // Pawn Shops
  '5935': 'antiques', // Wrecking and Salvage Yards
  '5937': 'antiques', // Antique Reproductions
  '5940': 'retail', // Bicycle Shops - Sales and Service
  '5941': 'retail', // Sporting Goods Stores
  '5942': 'retail', // Book Stores
  '5943': 'retail', // Stationery Stores, Office and School Supply Stores
  '5944': 'retail', // Jewelry Stores, Watches, Clocks, and Silverware Stores
  '5945': 'retail', // Hobby, Toy, and Game Shops
  '5946': 'retail', // Camera and Photographic Supply Stores
  '5947': 'retail', // Gift, Card, Novelty, and Souvenir Shops
  '5948': 'retail', // Luggage and Leather Goods Stores
  '5949': 'retail', // Sewing, Needlework, Fabric, and Piece Goods Stores
  '5950': 'retail', // Glassware, Crystal Stores
  '5960': 'retail', // Direct Marketing - Insurance Services
  '5961': 'retail', // Mail-Order Houses Including Catalog Order Stores, Book/Record Clubs (No longer valid for U.S. region)
  '5962': 'retail', // Direct Marketing - Travel Related Arrangement Services
  '5963': 'retail', // Door-to-Door Sales
  '5964': 'retail', // Direct Marketing - Catalog Merchant
  '5965': 'retail', // Direct Marketing - Catalog and Catalog and Retail Merchant
  '5966': 'retail', // Direct Marketing - Outbound Telemarketing
  '5967': 'retail', // Direct Marketing - Inbound Telemarketing
  '5968': 'retail', // Direct Marketing - Continuity/Subscription Merchants
  '5969': 'retail', // Direct Marketing - Other Direct Marketers (Not Elsewhere Classified)
  '5970': 'retail', // Artist's Supply and Craft Shops
  '5971': 'retail', // Art Dealers and Galleries
  '5972': 'retail', // Stamp and Coin Stores
  '5973': 'retail', // Religious Goods Stores
  '5975': 'retail', // Hearing Aids - Sales, Service, and Supply Stores
  '5976': 'retail', // Orthopedic Goods - Prosthetic Devices
  '5977': 'retail', // Cosmetic Stores
  '5978': 'retail', // Typewriter Stores
  // duplicate removed: 5983 already defined in transport section
  '5992': 'retail', // Florists
  '5993': 'retail', // Cigar Stores and Stands
  '5994': 'retail', // News Dealers and Newsstands
  '5995': 'retail', // Pet Shops, Pet Foods, and Supplies Stores
  '5996': 'retail', // Swimming Pools - Sales, Service, and Supplies
  '5997': 'retail', // Electric Razor Stores
  '5998': 'retail', // Tent and Awning Stores
  '5999': 'retail', // Miscellaneous and Specialty Retail Stores
  '6010': 'financial', // Financial Institutions - Manual Cash Disbursements
  '6011': 'financial', // Financial Institutions - Automated Cash Disbursements
  '6012': 'financial', // Financial Institutions - Merchandise and Services
  '6020': 'financial', // Financial Institutions - Manual Cash Disbursements
  '6021': 'financial', // Financial Institutions - Automated Cash Disbursements
  '6022': 'financial', // Financial Institutions - Merchandise and Services
  '6023': 'financial', // Financial Institutions - Automated Cash Disbursements
  '6024': 'financial', // Financial Institutions - Merchandise and Services
  '6025': 'financial', // Financial Institutions - Automated Cash Disbursements
  '6026': 'financial', // Financial Institutions - Merchandise and Services
  '6027': 'financial', // Financial Institutions - Automated Cash Disbursements
  '6028': 'financial', // Financial Institutions - Merchandise and Services
  '6029': 'financial', // Financial Institutions - Automated Cash Disbursements
  '6030': 'financial', // Financial Institutions - Merchandise and Services
  '6031': 'financial', // Financial Institutions - Automated Cash Disbursements
  '6032': 'financial', // Financial Institutions - Merchandise and Services
  '6033': 'financial', // Financial Institutions - Automated Cash Disbursements
  '6034': 'financial', // Financial Institutions - Merchandise and Services
  '6035': 'financial', // Financial Institutions - Automated Cash Disbursements
  '6036': 'financial', // Financial Institutions - Merchandise and Services
  '6037': 'financial', // Financial Institutions - Automated Cash Disbursements
  '6038': 'financial', // Financial Institutions - Merchandise and Services
  '6039': 'financial', // Financial Institutions - Automated Cash Disbursements
  '6040': 'financial', // Financial Institutions - Merchandise and Services
  '6041': 'financial', // Financial Institutions - Automated Cash Disbursements
  '6042': 'financial', // Financial Institutions - Merchandise and Services
  '6043': 'financial', // Financial Institutions - Automated Cash Disbursements
  '6044': 'financial', // Financial Institutions - Merchandise and Services
  '6045': 'financial', // Financial Institutions - Automated Cash Disbursements
  '6046': 'financial', // Financial Institutions - Merchandise and Services
  '6047': 'financial', // Financial Institutions - Automated Cash Disbursements
  '6048': 'financial', // Financial Institutions - Merchandise and Services
  '6049': 'financial', // Financial Institutions - Automated Cash Disbursements
  '6050': 'financial', // Financial Institutions - Merchandise and Services
  '6051': 'financial', // Financial Institutions - Automated Cash Disbursements
  '6052': 'financial', // Financial Institutions - Merchandise and Services
  '6053': 'financial', // Financial Institutions - Automated Cash Disbursements
  '6054': 'financial', // Financial Institutions - Merchandise and Services
  '6055': 'financial', // Financial Institutions - Automated Cash Disbursements
  '6056': 'financial', // Financial Institutions - Merchandise and Services
  '6057': 'financial', // Financial Institutions - Automated Cash Disbursements
  '6058': 'financial', // Financial Institutions - Merchandise and Services
  '6059': 'financial', // Financial Institutions - Automated Cash Disbursements
  '6060': 'financial', // Financial Institutions - Merchandise and Services
  '6061': 'financial', // Financial Institutions - Automated Cash Disbursements
  '6062': 'financial', // Financial Institutions - Merchandise and Services
  '6063': 'financial', // Financial Institutions - Automated Cash Disbursements
  '6064': 'financial', // Financial Institutions - Merchandise and Services
  '6065': 'financial', // Financial Institutions - Automated Cash Disbursements
  '6066': 'financial', // Financial Institutions - Merchandise and Services
  '6067': 'financial', // Financial Institutions - Automated Cash Disbursements
  '6068': 'financial', // Financial Institutions - Merchandise and Services
  '6069': 'financial', // Financial Institutions - Automated Cash Disbursements
  '6070': 'financial', // Financial Institutions - Merchandise and Services
  '6071': 'financial', // Financial Institutions - Automated Cash Disbursements
  '6072': 'financial', // Financial Institutions - Merchandise and Services
  '6073': 'financial', // Financial Institutions - Automated Cash Disbursements
  '6074': 'financial', // Financial Institutions - Merchandise and Services
  '6075': 'financial', // Financial Institutions - Automated Cash Disbursements
  '6076': 'financial', // Financial Institutions - Merchandise and Services
  '6077': 'financial', // Financial Institutions - Automated Cash Disbursements
  '6078': 'financial', // Financial Institutions - Merchandise and Services
  '6079': 'financial', // Financial Institutions - Automated Cash Disbursements
  '6080': 'financial', // Financial Institutions - Merchandise and Services
  '6081': 'financial', // Financial Institutions - Automated Cash Disbursements
  '6082': 'financial', // Financial Institutions - Merchandise and Services
  '6083': 'financial', // Financial Institutions - Automated Cash Disbursements
  '6084': 'financial', // Financial Institutions - Merchandise and Services
  '6085': 'financial', // Financial Institutions - Automated Cash Disbursements
  '6086': 'financial', // Financial Institutions - Merchandise and Services
  '6087': 'financial', // Financial Institutions - Automated Cash Disbursements
  '6088': 'financial', // Financial Institutions - Merchandise and Services
  '6089': 'financial', // Financial Institutions - Automated Cash Disbursements
  '6090': 'financial', // Financial Institutions - Merchandise and Services
  '6091': 'financial', // Financial Institutions - Automated Cash Disbursements
  '6092': 'financial', // Financial Institutions - Merchandise and Services
  '6093': 'financial', // Financial Institutions - Automated Cash Disbursements
  '6094': 'financial', // Financial Institutions - Merchandise and Services
  '6095': 'financial', // Financial Institutions - Automated Cash Disbursements
  '6096': 'financial', // Financial Institutions - Merchandise and Services
  '6097': 'financial', // Financial Institutions - Automated Cash Disbursements
  '6098': 'financial', // Financial Institutions - Merchandise and Services
  '6099': 'financial', // Financial Institutions - Merchandise and Services
  '7011': 'travel', // Hotels, Motels, and Resorts
  '7012': 'travel', // Timeshares
  '7032': 'travel', // Sporting and Recreational Camps
  '7033': 'travel', // Trailer Parks and Campgrounds
  '7210': 'travel', // Laundry, Cleaning, and Garment Services
  '7211': 'travel', // Laundry Services - Family and Commercial
  '7216': 'travel', // Dry Cleaners
  '7217': 'travel', // Carpet and Upholstery Cleaning
  '7221': 'travel', // Photographic Studios
  '7230': 'travel', // Beauty and Barber Shops
  '7251': 'travel', // Shoe Repair Shops, Shoe Shine Parlors, and Hat Cleaning Shops
  '7261': 'travel', // Funeral Services and Crematories
  '7273': 'travel', // Dating Services
  '7276': 'travel', // Tax Preparation Services
  '7277': 'travel', // Counseling Services - Debt, Marriage, Personal
  '7278': 'travel', // Buying and Shopping Services, Clubs
  '7296': 'travel', // Clothing Rental - Costumes, Uniforms, Formal Wear
  '7297': 'travel', // Massage Parlors
  '7298': 'travel', // Health and Beauty Spas
  '7299': 'travel', // Miscellaneous Personal Services (Not Elsewhere Classified)
  '7311': 'advertising', // Advertising Services
  '7321': 'advertising', // Consumer Credit Reporting Agencies
  '7322': 'advertising', // Debt Collection Agencies
  '7333': 'advertising', // Commercial Photography, Art, and Graphics
  '7338': 'advertising', // Quick Copy, Reproduction, and Blueprinting Services
  '7339': 'advertising', // Stenographic and Secretarial Support Services
  '7342': 'advertising', // Exterminating and Disinfecting Services
  '7349': 'advertising', // Cleaning and Maintenance Services
  '7361': 'advertising', // Employment Agencies, Temporary Help Services
  '7372': 'advertising', // Computer Programming, Data Processing, and Integrated Systems Design Services
  '7375': 'advertising', // Information Retrieval Services
  '7379': 'advertising', // Computer Maintenance, Repair, and Services (Not Elsewhere Classified)
  '7392': 'advertising', // Consulting, Public Relations, and Promotional Services
  '7393': 'advertising', // Detective Agencies, Protective Agencies, and Security Services, Including Armored Car Services
  '7394': 'advertising', // Equipment Rental and Leasing Services
  '7395': 'advertising', // Photofinishing Laboratories, Photo Developing
  '7399': 'advertising', // Business Services (Not Elsewhere Classified)
  '7511': 'travel', // Truck Rental
  '7512': 'travel', // Car Rental Agencies
  '7513': 'travel', // Truck Rental (Heavy Construction Equipment)
  '7519': 'travel', // Motor Home and Recreational Vehicle Rental
  '7523': 'travel', // Parking Lots and Garages
  '7531': 'travel', // Automotive Body Repair and Paint Shops
  '7533': 'travel', // Automotive Exhaust System Repair Shops
  '7534': 'travel', // Tire Retreading and Repair Shops
  '7535': 'travel', // Automotive Glass Replacement Shops
  '7538': 'travel', // General Automotive Repair Shops
  '7539': 'travel', // Automotive Service Shops (Non-Dealer)
  '7542': 'travel', // Car Washes
  '7549': 'travel', // Towing Services
  '7622': 'electronics', // Electronics Repair Shops
  '7623': 'electronics', // Air Conditioning and Refrigeration Repair Shops
  '7629': 'electronics', // Electrical and Small Appliance Repair Shops
  '7631': 'electronics', // Watch, Clock, and Jewelry Repair Shops
  '7641': 'electronics', // Furniture Repair and Refinishing
  '7692': 'electronics', // Welding Services
  '7699': 'electronics', // Miscellaneous Repair Shops and Related Services
  '7829': 'entertainment', // Motion Picture and Video Tape Production and Distribution
  '7832': 'entertainment', // Motion Picture Theaters
  '7841': 'entertainment', // Video Tape Rental Stores
  '7911': 'entertainment', // Dance Halls, Studios, and Schools
  '7922': 'entertainment', // Theatrical Producers (Except Motion Pictures), Ticket Agencies
  '7929': 'entertainment', // Bands, Orchestras, and Miscellaneous Entertainers (Not Elsewhere Classified)
  '7932': 'entertainment', // Billiard and Pool Establishments
  '7933': 'entertainment', // Bowling Alleys
  '7941': 'entertainment', // Sports Clubs, Athletic Fields, and Professional Sports Clubs
  '7991': 'entertainment', // Tourist Attractions and Exhibits
  '7992': 'entertainment', // Public Golf Courses
  '7993': 'entertainment', // Video Amusement Game Supplies
  '7994': 'entertainment', // Video Game Arcades
  '7995': 'entertainment', // Betting (Including Lottery Tickets, Casino Gaming Chips, Off-Track Betting, and Wagers)
  '7996': 'entertainment', // Amusement Parks, Circuses, Carnivals, and Fortune Tellers
  '7997': 'entertainment', // Membership Clubs (Sports, Recreation, Athletic), Country Clubs, and Private Golf Courses
  '7998': 'entertainment', // Aquariums, Dolphinariums, Seaquariums, and Zoos
  '7999': 'entertainment', // Recreation Services (Not Elsewhere Classified)
  '8011': 'healthcare', // Doctors and Physicians (Not Elsewhere Classified)
  '8021': 'healthcare', // Dentists and Orthodontists
  '8031': 'healthcare', // Osteopaths
  '8041': 'healthcare', // Chiropractors
  '8042': 'healthcare', // Optometrists and Ophthalmologists
  '8043': 'healthcare', // Podiatrists and Chiropodists
  '8049': 'healthcare', // Chiropractors and Osteopaths
  '8050': 'healthcare', // Nursing and Personal Care Facilities
  '8062': 'healthcare', // Hospitals
  '8071': 'healthcare', // Medical and Dental Laboratories
  '8099': 'healthcare', // Medical Services and Health Practitioners (Not Elsewhere Classified)
  '8111': 'legal', // Legal Services and Attorneys
  '8211': 'education', // Elementary and Secondary Schools
  '8220': 'education', // Colleges, Universities, Professional Schools, and Junior Colleges
  '8241': 'education', // Correspondence Schools
  '8244': 'education', // Business and Secretarial Schools
  '8249': 'education', // Trade and Vocational Schools
  '8299': 'education', // Educational Services (Not Elsewhere Classified)
  '8351': 'education', // Child Care Services
  '8398': 'education', // Charitable and Social Service Organizations
  '8641': 'education', // Civic, Social, and Fraternal Associations
  '8651': 'education', // Political Organizations
  '8661': 'education', // Religious Organizations
  '8675': 'education', // Automobile Associations
  '8699': 'education', // Membership Organizations (Not Elsewhere Classified)
  '8734': 'education', // Testing Laboratories (Non-Medical)
  '8911': 'education', // Architectural, Engineering, and Surveying Services
  '8931': 'education', // Accounting, Auditing, and Bookkeeping Services
  '8999': 'education', // Professional Services (Not Elsewhere Classified)
  '9211': 'government', // Court Costs, Including Alimony and Child Support
  '9222': 'government', // Fines
  '9223': 'government', // Bail and Bond Payments
  '9311': 'government', // Tax Payments
  '9399': 'government', // Government Services (Not Elsewhere Classified)
  '9401': 'government', // Postal Services - Government Only
  '9402': 'government', // U.S. Federal Government Agencies or Departments
  '9950': 'government', // Intra-Company Purchases
};

// Keyword-based category classification
export const CATEGORY_KEYWORDS: Record<string, string[]> = {
  'transport.fuel': ['gas', 'fuel', 'shell', 'exxon', 'chevron', 'bp', 'mobil', 'texaco', 'sunoco', 'valero'],
  'transport.publictransit': ['metro', 'subway', 'bus', 'transit', 'train', 'rail', 'bart', 'mta'],
  'transport.airline': ['airline', 'airways', 'flight', 'delta', 'united', 'american airlines', 'southwest'],
  'utilities.electricity': ['electric', 'power', 'utility', 'pge', 'energy'],
  'utilities.telecom': ['verizon', 'att', 't-mobile', 'sprint', 'comcast', 'xfinity', 'spectrum'],
  'grocery': ['grocery', 'supermarket', 'safeway', 'whole foods', 'trader joe', 'kroger', 'costco', 'walmart'],
  'restaurants': ['restaurant', 'cafe', 'coffee', 'starbucks', 'mcdonald', 'burger', 'pizza', 'taco', 'subway'],
  'apparel': ['clothing', 'apparel', 'fashion', 'nike', 'adidas', 'zara', 'h&m', 'gap', 'nordstrom'],
  'electronics': ['electronics', 'apple', 'best buy', 'computer', 'phone', 'amazon'],
  'home': ['home depot', 'lowes', 'ikea', 'furniture', 'hardware'],
  'entertainment': ['movie', 'cinema', 'netflix', 'spotify', 'hulu', 'disney', 'gaming'],
  'healthcare': ['hospital', 'clinic', 'pharmacy', 'cvs', 'walgreens', 'doctor', 'medical'],
};

// Default category for unclassified transactions
export const DEFAULT_CATEGORY = 'other';

