import { LocalGithubUser } from 'types';
import styles from './UserStatistics.module.scss';

export interface UserStatisticsProps
	extends Pick<LocalGithubUser, 'repos' | 'followers' | 'following'> {}

export const UserStatistics = ({ repos, followers, following }: UserStatisticsProps) => (
	<div className={styles.userStatistics}>
		<div className={styles.info}>
			<div className={styles.infoTitle}>Repos</div>
			<div className={styles.infoNumber}>{repos}</div>
		</div>
		<div className={styles.info}>
			<div className={styles.infoTitle}>Following</div>
			<div className={styles.infoNumber}>{following}</div>
		</div>
		<div className={styles.info}>
			<div className={styles.infoTitle}>Followers</div>
			<div className={styles.infoNumber}>{followers}</div>
		</div>
	</div>
);
