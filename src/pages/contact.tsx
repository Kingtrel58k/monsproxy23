import type { HolyPage } from '../App';
import { ObfuscatedThemeA } from '../ThemeElements';
import { HU_DISCORD_URL, SUPPORT_EMAIL } from '../consts';
import { Obfuscated } from '../obfuscate';
import { useTranslation } from 'react-i18next';

const Contact: HolyPage = () => {
	const { t } = useTranslation('link');

	return (
		<main>
			<h1>{t('contact')}</h1>
			<table>
				<tbody>
					<tr>
						<td>GitHub:</td>
						<td>
							<ObfuscatedThemeA
								href="https://github.com/holy-unblocker"
								title="Git repository"
							>
								<Obfuscated>https://github.com/holy-unblocker</Obfuscated>
							</ObfuscatedThemeA>
						</td>
					</tr>
					<tr>
						<td>Email:</td>
						<td>
							<ObfuscatedThemeA
								href={'mailto:' + SUPPORT_EMAIL}
								title="Email address"
							>
								<Obfuscated>{SUPPORT_EMAIL}</Obfuscated>
							</ObfuscatedThemeA>
						</td>
					</tr>
					<tr>
						<td>Discord:</td>
						<td>
							<ObfuscatedThemeA href={HU_DISCORD_URL} title="Server invite">
								<Obfuscated>{HU_DISCORD_URL}</Obfuscated>
							</ObfuscatedThemeA>
						</td>
					</tr>
				</tbody>
			</table>
		</main>
	);
};

export default Contact;
