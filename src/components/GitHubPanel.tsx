
import React, { useState, useEffect } from 'react';
import { Github, GitPullRequest, Star, GitCommit, MessageSquare } from 'lucide-react';
import { Button } from './ui/button';

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
  const username = "udithayeshmantha";
  
  useEffect(() => {
    const fetchGitHubUser = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (response.ok) {
          const data = await response.json();
          setUserData(data);
        } else {
          console.error('Failed to fetch GitHub user data');
        }
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchGitHubUser();
  }, []);
  
  // Generate mock contribution data for display purposes
  // In a real implementation, you would fetch this from GitHub's API
  const generateMockContributions = (): ContributionDay[] => {
    const contributions: ContributionDay[] = [];
    const daysInYear = 52 * 7; // Approx. days to show in contribution panel
    
    for (let i = 0; i < daysInYear; i++) {
      // Randomly assign contribution levels, with higher chance of 0 (no contribution)
      const rand = Math.random();
      let level: 0 | 1 | 2 | 3 | 4 = 0;
      
      if (rand > 0.8) level = 1;
      if (rand > 0.9) level = 2;
      if (rand > 0.95) level = 3;
      if (rand > 0.98) level = 4;
      
      const date = new Date();
      date.setDate(date.getDate() - (daysInYear - i));
      
      contributions.push({
        level,
        date: date.toISOString().split('T')[0]
      });
    }
    
    return contributions;
  };
  
  const mockContributions = generateMockContributions();
  
  const getLevelColor = (level: number) => {
    switch(level) {
      case 1: return 'bg-electric-blue/30';
      case 2: return 'bg-electric-blue/60';
      case 3: return 'bg-electric-blue/80';
      case 4: return 'bg-electric-blue';
      default: return 'bg-muted';
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
  
  const stats: GitHubStats = {
    repositories: userData?.public_repos || 0,
    pullRequests: 0, // Not available from basic API
    stars: userData?.followers || 0,
    commits: 0, // Not available from basic API
    issues: 0, // Not available from basic API
  };
  
  return (
    <div className="w-full bg-deep-charcoal rounded-xl p-6 glass-effect glow-border">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-3">
          <img 
            src={userData.avatar_url} 
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
      
      <div className="flex justify-between items-center text-sm text-text-secondary mb-2">
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
      
      <div className="mb-8 w-full overflow-hidden">
        <div className="grid grid-cols-52 gap-1">
          {Array.from({ length: 7 }).map((_, rowIndex) => (
            <div key={`row-${rowIndex}`} className="flex flex-col gap-1">
              {mockContributions.slice(rowIndex * 52, (rowIndex + 1) * 52).map((day, colIndex) => (
                <div 
                  key={`${rowIndex}-${colIndex}`}
                  className={`w-3 h-3 rounded-sm ${getLevelColor(day.level)}`}
                  title={`${day.date}: ${day.level} contributions`}
                ></div>
              ))}
            </div>
          ))}
        </div>
      </div>
      
      <div className="p-4 mb-6 rounded-lg bg-muted/30 border border-electric-blue/10 text-text-secondary">
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
          {userData.created_at && (
            <div className="flex items-center gap-1">
              <span>📅</span> Joined {new Date(userData.created_at).toLocaleDateString()}
            </div>
          )}
        </div>
      </div>
      
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
