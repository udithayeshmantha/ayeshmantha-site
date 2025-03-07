import React, { useState, useEffect } from 'react';
import { Github, GitPullRequest, Star, GitCommit, MessageSquare } from 'lucide-react';
import { Button } from './ui/button';
import { request, gql } from 'graphql-request';

interface ContributionDay {
  level: 0 | 1 | 2 | 3 | 4; // 0 = no contribution, 4 = most contributions
  date: string;
}

interface GitHubStats {
  repositories: number;
  pullRequests: number;
  stars: number;
  commits: number;
  issues: number;
}

const GitHubPanel: React.FC = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState<any>(null);
  const [stats, setStats] = useState<GitHubStats>({
    repositories: 0,
    pullRequests: 0,
    stars: 0,
    commits: 0,
    issues: 0,
  });
  const [contributions, setContributions] = useState<ContributionDay[]>([]);

  const username = "udithayeshmantha";  // change to your GitHub username
  const GITHUB_TOKEN = "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"; // Replace with your GitHub personal access token

  const fetchGitHubData = async () => {
    if (!GITHUB_TOKEN) {
      console.error('GitHub token is missing');
      return;
    }

    const query = gql`
      query($username: String!, $from: DateTime!, $to: DateTime!) {
        user(login: $username) {
          name
          avatarUrl
          bio
          location
          company
          createdAt
          websiteUrl
          repositories {
            totalCount
          }
          followers {
            totalCount
          }
          contributionsCollection(from: $from, to: $to) {
            contributionCalendar {
              weeks {
                contributionDays {
                  date
                  contributionCount
                }
              }
            }
            totalCommitContributions
            pullRequestContributionsByRepository {
              contributions {
                totalCount
              }
            }
            issueContributionsByRepository {
              contributions {
                totalCount
              }
            }
          }
        }
      }
    `;

    const from = new Date(year, 0, 1).toISOString();
    const to = new Date(year, 11, 31).toISOString();
    const variables = { username, from, to };

    try {
      setLoading(true);
      const result: { user: any } = await request('https://api.github.com/graphql', query, variables, {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      });

      const user = result.user;

      setUserData(user);

      const pullRequests = user.contributionsCollection.pullRequestContributionsByRepository.reduce(
        (acc: number, repo: any) => acc + repo.contributions.totalCount,
        0
      );

      const issues = user.contributionsCollection.issueContributionsByRepository.reduce(
        (acc: number, repo: any) => acc + repo.contributions.totalCount,
        0
      );

      setStats({
        repositories: user.repositories.totalCount,
        pullRequests,
        stars: user.followers.totalCount,
        commits: user.contributionsCollection.totalCommitContributions,
        issues,
      });

      const contributionDays: ContributionDay[] = [];
      user.contributionsCollection.contributionCalendar.weeks.forEach((week: any) => {
        week.contributionDays.forEach((day: any) => {
          const level = day.contributionCount === 0 ? 0
            : day.contributionCount <= 2 ? 1
            : day.contributionCount <= 5 ? 2
            : day.contributionCount <= 10 ? 3
            : 4;

          contributionDays.push({
            date: day.date,
            level,
          });
        });
      });

      setContributions(contributionDays);
    } catch (error) {
      console.error('Error fetching GitHub data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGitHubData();
  }, [year]);

const getLevelColor = (level: number) => {
  switch (level) {
    case 1: return 'bg-green-500 bg-opacity-25'; // Light green with 25% opacity
    case 2: return 'bg-green-500 bg-opacity-50'; // Medium light green with 50% opacity
    case 3: return 'bg-green-500 bg-opacity-75'; // Medium green with 75% opacity
    case 4: return 'bg-green-500 bg-opacity-100'; // Dark green with 100% opacity
    default: return 'bg-muted'; // No contributions
  }
};

  if (loading) {
    return (
      <div className="w-full bg-deep-charcoal rounded-xl p-6 glass-effect glow-border flex items-center justify-center py-16">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-electric-blue/30 mb-4"></div>
          <div className="h-6 w-48 bg-electric-blue/30 rounded mb-2"></div>
          <div className="h-4 w-64 bg-electric-blue/20 rounded"></div>
        </div>
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="w-full bg-deep-charcoal rounded-xl p-6 glass-effect glow-border">
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="w-20 h-20 rounded-full bg-deep-charcoal border border-electric-blue/20 flex items-center justify-center mb-4">
            <Github className="text-electric-blue" size={36} />
          </div>
          <h4 className="text-xl font-bold mb-2">GitHub user not found</h4>
          <p className="text-text-secondary max-w-md mb-6">
            Unable to load GitHub data for @{username}. Please check the username and try again.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-deep-charcoal rounded-xl p-6 glass-effect glow-border">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-3">
          <img
            src={userData.avatarUrl}
            alt={`${username}'s avatar`}
            className="w-10 h-10 rounded-full border border-electric-blue/30"
          />
          <div>
            <h3 className="text-xl font-bold text-text-primary">{userData.name || username}</h3>
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-electric-blue hover:underline text-sm flex items-center gap-1"
            >
              <Github size={14} />
              @{username}
            </a>
          </div>
        </div>

        <div className="relative">
          <select
            className="bg-muted text-text-primary px-4 py-2 rounded-lg appearance-none pr-10 border border-electric-blue/30 focus:border-electric-blue focus:outline-none"
            value={year}
            onChange={(e) => setYear(parseInt(e.target.value))}
          >
            {[2025, 2024, 2023, 2022, 2021].map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-electric-blue pointer-events-none">
            ▼
          </div>
        </div>
      </div>

      <div className="justify-between items-center text-sm text-text-secondary mb-2 hidden md:block">
        <span>Less</span>
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 bg-muted rounded-sm"></span>
          <span className="w-3 h-3 bg-electric-blue/30 rounded-sm"></span>
          <span className="w-3 h-3 bg-electric-blue/60 rounded-sm"></span>
          <span className="w-3 h-3 bg-electric-blue/80 rounded-sm"></span>
          <span className="w-3 h-3 bg-electric-blue rounded-sm"></span>
        </div>
        <span>More</span>
      </div>

      <div className="mb-8 w-full overflow-hidden hidden md:block">
        <div className="grid grid-cols-52 gap-1">
          {Array.from({ length: 52 }).map((_, colIndex) => (
            <div key={`col-${colIndex}`} className="flex flex-col gap-1">
              {contributions.slice(colIndex * 7, (colIndex + 1) * 7).map((day, rowIndex) => (
                <div
                  key={`${colIndex}-${rowIndex}`}
                  className={`w-3 h-3 xl:h-5 xl:w-5 lg:w-4 lg:h-4 rounded-sm ${getLevelColor(day.level)}`}
                  title={`${day.date}: ${day.level} contributions`}
                ></div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* <div className="p-4 mb-6 rounded-lg bg-muted/30 border border-electric-blue/10 text-text-secondary">
        <div className="flex items-center gap-2 text-text-primary mb-1">
          <span className="text-base font-medium">{userData.bio || 'UI/UX Designer & Developer'}</span>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {userData.location && (
            <div className="flex items-center gap-1">
              <span>📍</span> {userData.location}
            </div>
          )}
          {userData.company && (
            <div className="flex items-center gap-1">
              <span>🏢</span> {userData.company}
            </div>
          )}
          {userData.blog && (
            <div className="flex items-center gap-1">
              <span>🔗</span>
              <a
                href={userData.blog.startsWith('http') ? userData.blog : `https://${userData.blog}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-electric-blue hover:underline"
              >
                {userData.blog}
              </a>
            </div>
          )}
          {userData.createdAt && (
            <div className="flex items-center gap-1">
              <span>📅</span> Joined {new Date(userData.createdAt).toLocaleDateString()}
            </div>
          )}
        </div>
      </div> */}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-deep-charcoal border border-electric-blue/20 flex items-center justify-center mb-2">
            <Github className="text-electric-blue" size={24} />
          </div>
          <div className="text-2xl font-bold">{stats.repositories}</div>
          <div className="text-sm text-text-secondary">Repositories</div>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-deep-charcoal border border-electric-blue/20 flex items-center justify-center mb-2">
            <GitPullRequest className="text-electric-blue" size={24} />
          </div>
          <div className="text-2xl font-bold">{stats.pullRequests}</div>
          <div className="text-sm text-text-secondary">Pull Requests</div>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-deep-charcoal border border-electric-blue/20 flex items-center justify-center mb-2">
            <Star className="text-electric-blue" size={24} />
          </div>
          <div className="text-2xl font-bold">{stats.stars}+</div>
          <div className="text-sm text-text-secondary">Followers</div>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-deep-charcoal border border-electric-blue/20 flex items-center justify-center mb-2">
            <GitCommit className="text-electric-blue" size={24} />
          </div>
          <div className="text-2xl font-bold">{stats.commits}</div>
          <div className="text-sm text-text-secondary">Commits</div>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-deep-charcoal border border-electric-blue/20 flex items-center justify-center mb-2">
            <MessageSquare className="text-electric-blue" size={24} />
          </div>
          <div className="text-2xl font-bold">{stats.issues}</div>
          <div className="text-sm text-text-secondary">Issues</div>
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <Button
          className="bg-electric-blue hover:bg-electric-blue/80 text-white flex items-center gap-2"
          onClick={() => window.open(`https://github.com/${username}`, '_blank')}
        >
          <Github size={18} />
          View GitHub Profile
        </Button>
      </div>
    </div>
  );
};

export default GitHubPanel;