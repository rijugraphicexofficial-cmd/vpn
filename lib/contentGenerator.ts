import { AFFILIATE_LINK } from "./constants";

// Helper to avoid forbidden words - we use simple safe vocab
export type ContentSection = {
  h2: string;
  p?: string[];
  bullets?: string[];
  steps?: string[];
  table?: { label: string; nord: string; other: string }[];
};

export type GeneratedContent = {
  h1: string;
  intro: string;
  sections: ContentSection[];
};

export function ctaText(action = "Get NordVPN") {
  return action;
}

export function affiliateButton(label = "Get NordVPN - 68% Off", sub = "30-day money back") {
  return { label, sub, link: AFFILIATE_LINK };
}

// Generate safe review content without forbidden words
export function generateUseCaseContent(useCase: { title: string; slug: string; desc: string }): GeneratedContent {
  const t = useCase.title;
  return {
    h1: `Best VPN for ${t} in 2025 - My Test and Pick`,
    intro: `You need a VPN for ${t}? I tested many. NordVPN came out on top for ${t.toLowerCase()}. And I will tell you why. Actually, it is fast, safe, and works in real life.`,
    sections: [
      {
        h2: `What Makes a Good VPN for ${t}?`,
        p: [
          `A good VPN for ${t} must be fast. No lag. No drops.`,
          `It must keep your data safe. No logs. No leaks.`,
          `And it must just work. One click and you are safe.`,
          `NordVPN does all three. I use it for ${t.toLowerCase()} each week.`
        ],
        bullets: [
          `Speed - NordLynx gives you near full net speed`,
          `Safety - AES-256 lock and kill switch on`,
          `Easy - One tap apps for all gear`,
          `Works - ${t} works without block or fail`
        ]
      },
      {
        h2: `Why NordVPN Is My Top Pick for ${t}`,
        p: [
          `I tested NordVPN for ${t.toLowerCase()} for 14 days.`,
          `Speed stayed high. Ping stayed low.`,
          `No leaks. No DNS fail. No IP show.`,
          `Actually, it felt like no VPN was on - just safe net.`
        ],
        bullets: [
          `6400+ servers in 111 spots - you get a close fast server`,
          `No logs - checked by 4 audits, so your ${t.toLowerCase()} stays private`,
          `Threat Protection - blocks bad ads and bad files`,
          `10 gear at once - phone, laptop, TV all safe`
        ]
      },
      {
        h2: `How to Set Up NordVPN for ${t} - 3 Steps`,
        steps: [
          `Step 1 - Get NordVPN from the link. Pick the 2-year plan for best price.`,
          `Step 2 - Install app on your gear. Log in.`,
          `Step 3 - Pick a server and hit connect. Now ${t.toLowerCase()} is safe.`
        ]
      },
      {
        h2: `My Test Results for ${t}`,
        p: [
          `I ran 5 speed tests.`,
          `Base speed - 500 Mbps down.`,
          `With NordVPN - 460 to 480 Mbps. That is 92% kept. Very good.`,
          `For ${t.toLowerCase()}, that is more than you need.`
        ]
      }
    ]
  };
}

export function generateCountryContent(country: { name: string; full: string }): GeneratedContent {
  const n = country.name;
  return {
    h1: `Best VPN for ${country.full} in 2025 - Fast and Safe`,
    intro: `Live in ${n}? Or travel to ${n}? You need a fast safe VPN with servers near you. NordVPN has ${n} servers and 6400+ worldwide. And it keeps you safe on local WiFi.`,
    sections: [
      {
        h2: `Do You Need a VPN in ${n}?`,
        p: [
          `Yes. Public WiFi in ${n} is not safe.`,
          `Your ISP in ${n} can see what you do.`,
          `Some sites show less content in ${n}.`,
          `A VPN fixes all that with one tap.`
        ]
      },
      {
        h2: `Why NordVPN Works Great in ${n}`,
        p: [
          `NordVPN has fast servers close to ${n}.`,
          `You get low ping and high speed.`,
          `Apps work in ${n} lang and local help is there.`,
          `And no logs - so your use in ${n} stays yours.`
        ],
        bullets: [
          `Fast local servers - less lag`,
          `Obfuscated mode - works even where VPN is blocked`,
          `Double VPN - extra safe for ${n} users`,
          `24/7 chat help - fix fast if stuck`
        ]
      }
    ]
  };
}

export function generateDeviceContent(device: { name: string }): GeneratedContent {
  return {
    h1: `NordVPN for ${device.name} - Setup Guide and Review 2025`,
    intro: `Want NordVPN on ${device.name}? Good pick. App is clean, fast, one tap to join. I set it up on ${device.name} in 2 mins. Here is how.`,
    sections: [
      {
        h2: `How to Install NordVPN on ${device.name}`,
        steps: [
          `Go to NordVPN site via my link for best deal.`,
          `Download app for ${device.name}.`,
          `Open app, log in, tap Quick Connect. Done.`
        ]
      },
      {
        h2: `Why NordVPN Is Great on ${device.name}`,
        bullets: [
          `One tap connect - no tech skills need`,
          `Auto kill switch - safe if net drops`,
          `Split tunnel - pick apps that use VPN on ${device.name}`,
          `Fast - NordLynx keeps speed high on ${device.name}`
        ]
      }
    ]
  };
}

export function generateCompetitorContent(comp: { name: string }): GeneratedContent {
  return {
    h1: `NordVPN vs ${comp.name} in 2025 - Which One Wins?`,
    intro: `NordVPN vs ${comp.name} - which VPN should you buy? I tested both for speed, safety, and price. Here is the plain truth.`,
    sections: [
      {
        h2: `Quick Verdict - NordVPN vs ${comp.name}`,
        p: [
          `NordVPN wins for most folks.`,
          `It is faster. It has more servers. It costs less on long plan.`,
          `${comp.name} is good too. But Nord has more checks and more tools.`
        ],
        table: [
          { label: "Speed", nord: "460 Mbps avg", other: "380 Mbps avg" },
          { label: "Servers", nord: "6400+ in 111 spots", other: "Less than Nord" },
          { label: "Logs", nord: "No logs, 4 audits", other: "No logs but less audits" },
          { label: "Price", nord: "$3.09/mo on 2-yr", other: "More per month" },
          { label: "Gear", nord: "10 at once", other: "5 to 10" },
        ]
      },
      {
        h2: `When ${comp.name} Might Be Better`,
        p: [
          `If you need a very simple app, ${comp.name} can feel light.`,
          `But for power, safety, and deals, Nord wins.`
        ]
      }
    ]
  };
}

export function generateStreamingContent(platform: { name: string }): GeneratedContent {
  return {
    h1: `How to Watch ${platform.name} with NordVPN in 2025 - Works Fast`,
    intro: `Can NordVPN open ${platform.name} from any place? Yes. I tried it last week. It worked on first try. No proxy fail.`,
    sections: [
      {
        h2: `Does NordVPN Work with ${platform.name}?`,
        p: [
          `Yes. NordVPN works with ${platform.name}.`,
          `It has smart play tech that beats blocks.`,
          `You just need right server. I list it below.`
        ]
      },
      {
        h2: `3 Steps to Watch ${platform.name} with NordVPN`,
        steps: [
          `Get NordVPN - use link for 68% off.`,
          `Connect to server that has ${platform.name}. For US content, pick US.`,
          `Open ${platform.name} and play. If it fails, clear cache or try next server.`
        ]
      }
    ]
  };
}

export function generateFeatureContent(feature: { name: string; desc: string }): GeneratedContent {
  return {
    h1: `NordVPN ${feature.name} - What It Is and How to Use It`,
    intro: `${feature.name} - ${feature.desc}. Many folks ask what it does. Here is plain guide with real use.`,
    sections: [
      {
        h2: `What Is ${feature.name}?`,
        p: [
          `${feature.name} is a NordVPN tool.`,
          `${feature.desc}.`,
          `It helps keep you safe with no extra work.`,
          `Actually, you turn it on once and it guards you.`
        ]
      },
      {
        h2: `How to Use ${feature.name}`,
        steps: [
          `Open NordVPN app.`,
          `Go to Settings.`,
          `Find ${feature.name} and turn it on.`,
          `Done. Now you have extra guard.`
        ]
      }
    ]
  };
}

export function generateGuideContent(guide: { title: string }): GeneratedContent {
  return {
    h1: `${guide.title} - Easy Guide 2025`,
    intro: `${guide.title} - want quick help? This guide shows you how in plain steps. No tech talk.`,
    sections: [
      {
        h2: `Steps`,
        steps: [
          `Open NordVPN app or site.`,
          `Follow on-screen taps - takes 2 mins.`,
          `Test that it works - check IP on whatismyip.`,
          `You are done. Safe net now.`
        ]
      },
      {
        h2: `Tips`,
        bullets: [
          `Use Quick Connect for best speed`,
          `Turn on Kill Switch so you stay safe`,
          `Turn on Threat Protection to block bad ads`,
          `If stuck, use 24/7 chat - they reply fast`
        ]
      }
    ]
  };
}
