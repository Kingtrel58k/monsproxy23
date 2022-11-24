import type { HolyPage } from '../App';
import { ObfuscatedThemeA, ThemeLink } from '../ThemeElements';
import { TN_DISCORD_URL } from '../consts';
import { Obfuscated } from '../obfuscate';
import { getHot } from '../routes';
import type { ReactNode } from 'react';
import { Trans, useTranslation } from 'react-i18next';

const WebsiteAIOLink = ({ children }: { children?: ReactNode }) => (
	<ObfuscatedThemeA
		href="https://github.com/holy-unblocker/website-aio#website-aio"
		title="Invite"
	>
		{children}
	</ObfuscatedThemeA>
);

const TNInviteLink = ({ children }: { children?: ReactNode }) => (
	<ObfuscatedThemeA href={TN_DISCORD_URL} title="Invite">
		<Obfuscated>{children}</Obfuscated>
	</ObfuscatedThemeA>
);

const GitLink = ({ children }: { children?: ReactNode }) => (
	<ObfuscatedThemeA
		href="https://github.com/holy-unblocker/holy/website"
		title="Git repository"
	>
		{children}
	</ObfuscatedThemeA>
);

const ContactLink = ({ children }: { children?: ReactNode }) => (
	<ThemeLink to={getHot('contact').path}>{children}</ThemeLink>
);

const PrivacyLink = ({ children }: { children?: ReactNode }) => (
	<ThemeLink to={getHot('privacy').path}>{children}</ThemeLink>
);

const FAQ: HolyPage = () => {
	const { t } = useTranslation('faq');

	// <0> = obfuscated always

	return (
		<main>
			<section>
				<h1>
					<Obfuscated>{t(`list.selfhost.q`)}</Obfuscated>
				</h1>
				<p>
					<Trans
						ns="faq"
						i18nKey={`list.selfhost.a`}
						components={[<Obfuscated />, <WebsiteAIOLink />]}
					/>
				</p>
			</section>
			<section>
				<h1>
					<Obfuscated>{t(`list.morelinks.q`)}</Obfuscated>
				</h1>
				<p>
					<Trans
						ns="faq"
						i18nKey={`list.morelinks.a`}
						components={[<Obfuscated />, <TNInviteLink />]}
					/>
				</p>
			</section>
			<section>
				<h1>
					<Obfuscated>{t(`list.source.q`)}</Obfuscated>
				</h1>
				<p>
					<Trans
						ns="faq"
						i18nKey={`list.source.a`}
						components={[<Obfuscated />, <GitLink />]}
					/>
				</p>
			</section>
			<section>
				<h1>
					<Obfuscated>{t(`list.secure.q`)}</Obfuscated>
				</h1>
				<p>
					<Trans
						ns="faq"
						i18nKey={`list.secure.a`}
						components={[<Obfuscated />, <PrivacyLink />]}
					/>
				</p>
			</section>
			<p style={{ marginTop: 30, opacity: 0.75 }}>
				<Trans ns="faq" i18nKey={`contact`} components={[<ContactLink />]} />
			</p>
		</main>
	);
};

export default FAQ;
