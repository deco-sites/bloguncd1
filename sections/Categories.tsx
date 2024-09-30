export interface Nav {
    navigation?: {
        links: {
            label?: string;
            url?: string;
        }[];
    };
}

export default function CategoriesPosts({
    navigation = {
        links: [
            { label: "Home", url: "/" },
            { label: "About us", url: "/" },
            { label: "Princing", url: "/" },
            { label: "Contact", url: "/" },
        ],
    },
}: Nav) {
    return (
        <div class="mt-8 mx-6 lg:mx-auto lg:w-full space-y-4 gap-4 flex  items-center justify-between max-lg:justify-start container mb-8 max-lg:flex-col lg:flex-row">
            <span class="text-primary font-bold text-[32px]">
                Todas as postagens
            </span>
            <ul
                class="flex gap-4"
                role="tablist"
                hx-target="#tab-contents"
                hx-on:htmx-after-on-load="let currentTab = document.querySelector('[aria-selected=true]'); if (currentTab) { currentTab.setAttribute('aria-selected', 'false'); currentTab.classList.remove('selected'); } let newTab = event.target; newTab.setAttribute('aria-selected', 'true'); newTab.classList.add('selected');"
            >
                {navigation.links.map((link) => (
                    <li>
                        <button
                            role="tab"
                            aria-controls="tab-contents"
                            aria-selected="false"
                            hx-get={link.url}
                            aria-label={link.label}
                            class="link no-underline hover:underline p-4 uppercase text-primary font-bold text-base px-[20px] py-[8px] border border-[#BBBBBB] bg-white rounded-[27px]"
                        >
                            {link.label}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
