import React, { useState } from 'react';
import styles from "./styles.module.scss";
import Image from 'next/image';

const News_data = [
    {
        "Headline": "Apple, Google, Meta and Microsoft&#8217;s Data Centre Emissions May Be 7.62 Times Higher Than Reported",
        "Summary": "Emissions from company-owned data centres of big technology giants Google, Microsoft, Meta and Apple are likely around 7.62 times higher than officially reported, according to a recent analysis by the Guardian. These companies\u2019 emissions still dwarf those of Amazon, the largest emitter of the big five tech conglomerates. Amazon\u2019s emissions were more than double that [\u2026]\n",
        "URL": "https://impakter.com/apple-google-meta-and-microsofts-data-centre-emissions-may-be-7-62-times-higher-than-reported/",
        "Image_URL": "https://impakter.com/wp-content/uploads/2024/09/google-servers-dedicated-7448-e1726829708815.jpg",
        "Date": "2024-09-20",
        "Categories": [
            "AI &amp; MACHINE LEARNING",
            "Business",
            "Corporations",
            "ESG News",
            "Tech"
        ],
        "Tags": [
            "AI",
            "Apple",
            "artificial intelligence",
            "big tech",
            "Carbon Emissions",
            "Data centres",
            "Google",
            "Meta",
            "Microsoft",
            "The Guardian"
        ]
    },
    {
        "Headline": "CEOs Shift Focus From Sustainability to AI and Inflation, Survey Finds",
        "Summary": "The survey, conducted globally, found that corporate concern on sustainability has made way for more time-sensitive concerns, such as AI adoption and inflation. As a result, while 81% of CEOs acknowledge the long-term significance of keeping up with sustainability efforts, only 47% are actively prioritizing it.\u00a0 This trend is largely driven by rising costs and [\u2026]\n",
        "URL": "https://impakter.com/ceos-shift-focus-from-sustainability-to-ai-and-inflation-survey-finds/",
        "Image_URL": "https://impakter.com/wp-content/uploads/2024/09/image-from-rawpixel-id-3284178-jpeg-e1726666469392.jpg",
        "Date": "2024-09-18",
        "Categories": [
            "Business",
            "ESG FINANCE",
            "ESG News"
        ],
        "Tags": [
            "AI",
            "artificial intelligence",
            "Bain &amp; Company",
            "CEOs",
            "Corporate Sustainability",
            "ESG",
            "inflation",
            "Sustainability"
        ]
    },
    {
        "Headline": "Shein Is Officially the Biggest Polluter in Fast Fashion. AI Is Making Things Worse",
        "Summary": "In 2023, the fast fashion giant Shein was everywhere. Crisscrossing the globe, airplanes ferried small packages of its ultra-cheap clothing from\u00a0thousands of suppliers\u00a0to tens of millions of customer mailboxes in 150 countries. Influencers\u2019 \u201c#sheinhaul\u201d videos advertised the company\u2019s trendy styles on social media, garnering\u00a0billions of views. At every step, data was created, collected, and analyzed. [\u2026]\n",
        "URL": "https://impakter.com/shein-is-officially-the-biggest-polluter-in-fast-fashion-ai-is-making-things-worse/",
        "Image_URL": "https://impakter.com/wp-content/uploads/2024/09/Untitled.jpg",
        "Date": "2024-09-13",
        "Categories": [
            "Business",
            "ESG News"
        ],
        "Tags": [
            "AI",
            "artificial intelligence",
            "CCN",
            "Covering Climate Now",
            "fashion",
            "fast fashion",
            "Grist",
            "Pollution",
            "shein"
        ]
    },
    {
        "Headline": "Apple and Google Lose EU Court Battles, Forced to Pay Billions",
        "Summary": "This week at the European Court of Justice (ECJ) in Brussels, Apple lost a major, \u20ac13 billion Irish tax case. The ruling came as the European Commission has increased efforts to suppress \u201csweetheart\u201d tax deals for multinational corporations. This comes after a legal battle that started in 2016 in which the iPhone maker claimed the [\u2026]\n",
        "URL": "https://impakter.com/apple-and-google-lose-eu-court-battles-forced-to-pay-billions/",
        "Image_URL": "https://impakter.com/wp-content/uploads/2024/09/grande-salle-e1726062169364.jpg",
        "Date": "2024-09-11",
        "Categories": [
            "Business",
            "Corporations",
            "ESG News",
            "Society"
        ],
        "Tags": [
            "Amazon",
            "Apple",
            "ECJ",
            "EU",
            "European Commission",
            "European Court of Justice",
            "European General Court",
            "Google",
            "Ireland",
            "multinational corporations"
        ]
    },
    {
        "Headline": "How Fast Fashion Is Damaging the Environment",
        "Summary": "From textile transportation to coal-powered sweatshops to wasted clothes, the impact of fast fashion on the environment cannot be ignored. In 2023, the United Nations Environment Program (UNEP) stated that the fashion industry is contributing to 10% of global carbon emissions annually \u2014 more than international flights and maritime shipping combined. The industry\u2019s greenhouse gas [\u2026]\n",
        "URL": "https://impakter.com/how-fast-fashion-is-damaging-the-environment/",
        "Image_URL": "https://impakter.com/wp-content/uploads/2024/09/GP04CXR_Low-res-with-credit-line-800px-e1725460218612.jpg",
        "Date": "2024-09-04",
        "Categories": [
            "Business",
            "Environment",
            "Fashion"
        ],
        "Tags": [
            "carbon footprint",
            "fashion industry",
            "fast fashion",
            "Fast fashion and the environment",
            "Textile waste",
            "Waste"
        ]
    },
    {
        "Headline": "A New Era in Environmental Accountability: SpaceX Launches Methane-Tracking Satellite",
        "Summary": "SpaceX, the private aerospace company founded by Elon Musk, has launched into space nonprofit Carbon Mapper\u2019s groundbreaking satellite aimed at monitoring methane emissions on a global scale. Launched from the Vandenberg Space Force in California on Aug. 16, the Tanager 1 satellite will track methane emissions with unparalleled accuracy \u2014\u00a0\u201cdown to the level of individual [\u2026]\n",
        "URL": "https://impakter.com/spacex-launches-methane-tracking-satellite-tanager-1-a-new-era-in-environmental-accountability/",
        "Image_URL": "https://impakter.com/wp-content/uploads/2024/08/1-PIA26411_Tanager-Rendering.jpg",
        "Date": "2024-08-23",
        "Categories": [
            "Business",
            "Climate Change",
            "ESG News",
            "Pollution",
            "Science",
            "Tech"
        ],
        "Tags": [
            "IEA",
            "Methane",
            "Methane Tracking",
            "Methane-Tracking Satellite",
            "NASA",
            "SpaceX",
            "Tanager 1"
        ]
    },
    {
        "Headline": "Over 80% of US Companies Are Building Net-Zero Programmes, Survey Shows",
        "Summary": "According to a new survey conducted by EcoOnline, an ESG and EHS solutions provider, over 80% of U.S. companies with revenues exceeding $500 million are advancing their net-zero programs, even before the formal implementation of new climate regulations. The survey\u2019s results are a clear indicator of the growing commitment among major U.S. corporations to sustainability, [\u2026]\n",
        "URL": "https://impakter.com/over-80-of-us-companies-are-building-net-zero-programmes-survey-shows/",
        "Image_URL": "https://impakter.com/wp-content/uploads/2024/08/alex-shutin-XsC0GHXi-8k-unsplash-1-e1724080369731.jpg",
        "Date": "2024-08-19",
        "Categories": [
            "Business",
            "ESG FINANCE",
            "ESG News",
            "Sustainable Finance"
        ],
        "Tags": [
            "climate regulation",
            "Corporate Leadership",
            "EcoOnline",
            "ESG",
            "Net Zero",
            "Sustainability",
            "Sustainability Reporting"
        ]
    },
    {
        "Headline": "Google&#8217;s Monopoly Case Builds Pressure on Tech Giants",
        "Summary": "On August 5, 2024, the US Court for the District of Columbia (DC)\u00a0decided that Google was a monopolist, meaning it has durable market power as the dominant player in its field of \u201cgeneral search services.\u201d This is a violation of competition law. As a remedy, the DC Court may seek from Google search neutrality, requiring [\u2026]\n",
        "URL": "https://impakter.com/googles-monopoly-case-builds-pressure-on-tech-giants/",
        "Image_URL": "https://impakter.com/wp-content/uploads/2024/08/74134da2-1d92-4bcf-b603-dd07fdca1253-e1723630479164.jpg",
        "Date": "2024-08-14",
        "Categories": [
            "Business",
            "ESG News",
            "TECH"
        ],
        "Tags": [
            "Amazon",
            "big tech",
            "Facebook",
            "Google",
            "Microsoft",
            "Monopoly",
            "silicon valley",
            "tech giants"
        ]
    },
    {
        "Headline": "Japan\u2019s MUFG Launches New Sustainable Finance Network",
        "Summary": "Mitsubishi UFJ Financial Group (MUFG), one of Japan\u2019s largest financial institutions, has taken a significant step toward promoting sustainability and positive social impact. In a recent announcement, MUFG unveiled its Sustainable Finance Framework, designed to channel capital markets funding into projects that benefit the environment and society. As an international financial institution, MUFG offers a [\u2026]\n",
        "URL": "https://impakter.com/japans-mufg-launches-new-sustainable-finance-network/",
        "Image_URL": "https://impakter.com/wp-content/uploads/2024/08/Bank_of_Tokyo-Mitsubishi_UFJ_2018-1-e1723461141917.jpg",
        "Date": "2024-08-12",
        "Categories": [
            "Business",
            "Environment",
            "ESG FINANCE",
            "ESG News",
            "Impact",
            "Sustainable Finance"
        ],
        "Tags": [
            "Economic Sustainability",
            "green bonds",
            "International Financial Institutions",
            "MUFG",
            "social impact",
            "sustainable finance"
        ]
    },
    {
        "Headline": "How Much Will Climate Change Drag Down the Economy?",
        "Summary": "When Category 5 Hurricane Otis roared through Acapulco, Mexico, in October 2023, the city was left in ruins. Winds stripped facades from beachfront buildings and storm surge flooded lobbies. The storm killed at least 50 people and damaged 80% of hotels in the once-glittering resort town. Six months later, a Bloomberg reporter\u00a0described \u201ca grim scene,\u201d [\u2026]\n",
        "URL": "https://impakter.com/how-much-will-climate-change-drag-down-the-economy/",
        "Image_URL": "https://impakter.com/wp-content/uploads/2024/07/624-with-caption-Tom-Toro-YCC-We-Ran-The-Numbers-finish-6-25-24.webp",
        "Date": "2024-07-21",
        "Categories": [
            "Business",
            "Climate Change",
            "Environment",
            "ESG FINANCE",
            "Sustainable Cities",
            "Sustainable Finance"
        ],
        "Tags": [
            "Acapulco",
            "CCN",
            "Climate Change",
            "Covering Climate Now",
            "economic impact",
            "Extreme Weather",
            "Hurricane Otis",
            "tourism",
            "Yale",
            "Yale Climate Connections"
        ]
    }
]

const Esgnews = () => {
    const [oldNews, setoldNews] = useState(News_data.slice(5));
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [dateOrder, setDateOrder] = useState<string>('latest'); // 'latest' or 'oldest'

    const truncateSummary = (summary:any) => {
      const words = summary.split(' ');
      return words.length > 20 ? words.slice(0, 20).join(' ') + '...' : summary;
    };

    const truncateSummaryHeadline = (summary:any) => {
      const words = summary.split(' ');
      return words.length > 30 ? words.slice(0, 30).join(' ') + '...' : summary;
    };
  
    const formatDate = (dateString:any) => {
      const date = new Date(dateString);
      const options:any = { day: 'numeric', month: 'long', year: 'numeric' };
      return date.toLocaleDateString('en-US', options);
    };

    const sortNewsByDate = (news: any) => {
        return news.sort((a:any, b:any) => {
          const dateA = new Date(a.Date).getTime();
          const dateB = new Date(b.Date).getTime();
          return dateOrder === 'latest' ? dateB - dateA : dateA - dateB;
        });
    };
    
    
    const filterAndSortNews = (news: any) => {
        const filteredNews = news.filter((item:any) => {
        return (
            item.Headline.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.Summary.toLowerCase().includes(searchTerm.toLowerCase())
          );
        });
    
        return sortNewsByDate(filteredNews);
    };
    
    const filteredAndSortedNews = filterAndSortNews(oldNews);

    
  
    return (
      <div className={styles.EsgNewsContainer}>
      
      <div className={styles.EsgcontHeadMessage}>
         <h3>Welcome to <span>ESG News</span> Bulletin</h3>
         <p>Your Source for the Latest Updates on Environmental, Social, and Governance Trends.</p>
      </div>

      <div className={styles.latestHeadLines}>
        <Image src={News_data[0].Image_URL} width={700} height={700} alt='none' className={styles.newsImgHeadline} />
        <div className={styles.News_desc}>
            <a href={News_data[0].URL} target="_blank" className={styles.links}><p className={styles.Headline}>{News_data[0].Headline}</p></a>
            <p className={styles.Summary}>{truncateSummaryHeadline(News_data[0].Summary)}</p>
            <p className={styles.TagtextHeadline}><span className={styles.Tags}>Tags</span>  {News_data[0].Tags[0]}, {News_data[0].Tags[1]}</p>
            <p className={styles.date}>{formatDate(News_data[0].Date)}</p>
        </div>  
        
      </div>

      <div className={styles.Esgnews}>
        <div className={styles.Header}>
            <h2>Latest <span>News</span></h2>
        </div>
        <div className={styles.NewsData}> 
        {News_data.map((items, index) => {
          return (
            (index>0 && index < 5) && (
              <div key={index} className={styles.newsCont}>
                <Image src={items.Image_URL} width={300} height={300} alt='none' className={styles.newsImg} />
                <p className={styles.Tagtext}><span className={styles.Tags}>Tags</span><span>{items.Tags[0]}, {items.Tags[1]}</span></p>
                <p className={styles.date}>{formatDate(items.Date)}</p>
                <a href={items.URL} target="_blank" className={styles.links}><p className={styles.Headline}>{items.Headline}</p></a>
                <p className={styles.Summary}>{truncateSummary(items.Summary)}</p>
              </div>
            )
          );
        })}
        </div>
      </div>


      <div className={styles.Esgnews}>
            <div className={styles.Header}>
                <h2>News</h2>
                <div className={styles.filterContainer}>
                <input
                type="text"
                placeholder="Search news..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={styles.searchInput}
                />
                <select
                value={dateOrder}
                onChange={(e) => setDateOrder(e.target.value)}
                className={styles.selectInput}
                >
                <option value="latest">Latest</option>
                <option value="oldest">Oldest</option>
                </select>
            </div>
            </div>        
            <div className={styles.NewsData}>
                {filteredAndSortedNews.length > 0 ? (
                filteredAndSortedNews.map((item:any, index:any) => (
                    (index > 0 && index < 5) && ( // Ensure index filtering as per original logic
                    <div key={index} className={styles.newsCont}>
                        <Image src={item.Image_URL} width={300} height={300} alt="news image" className={styles.newsImg} />
                        <p className={styles.Tagtext}>
                        <span className={styles.Tags}>Tags</span>
                        <span>{item.Tags[0]}, {item.Tags[1]}</span>
                        </p>
                        <p className={styles.date}>{formatDate(item.Date)}</p>
                        <a href={item.URL} target="_blank" rel="noopener noreferrer" className={styles.links}>
                        <p className={styles.Headline}>{item.Headline}</p>
                        </a>
                        <p className={styles.Summary}>{truncateSummary(item.Summary)}</p>
                    </div>
                    )
                ))
                ) : (
                <p>No news articles match your criteria.</p>
                )}
            </div>
        </div>

      </div>
    );
  };
  
  export default Esgnews;
  
  