interface GitHubStarButtonProps {
  user: string;
  repo: string;
  size?: 'normal' | 'large';
  showCount?: boolean;
  className?: string;
}

export default function GitHubStarButton({
  user,
  repo,
  size = 'normal',
  showCount = false,
  className = ''
}: GitHubStarButtonProps) {
  const buttonSize = size === 'large' ? '&size=large' : '';
  const count = showCount ? '&count=true' : '';
  const width = size === 'large' ? 100 : 90;
  const height = size === 'large' ? 30 : 20;

  return (
    <iframe
      src={``}
      width={width}
      height={height}
      frameBorder="0"
      scrolling="0"
      title={``}
      className={className}
    />
  );
}