// Security utilities for input validation and sanitization

export const sanitizeInput = (input: string): string => {
  return input
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .replace(/data:/gi, '') // Remove data: protocol
    .replace(/vbscript:/gi, '') // Remove vbscript: protocol
    .trim();
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
};

export const validatePhone = (phone: string): boolean => {
  const phoneClean = phone.replace(/\D/g, '');
  return phoneClean.length >= 10 && phoneClean.length <= 11;
};

export const validateName = (name: string): boolean => {
  return name.length >= 2 && name.length <= 100 && /^[a-zA-ZÀ-ÿ\s]+$/.test(name);
};

export const rateLimitCheck = (() => {
  const attempts = new Map<string, { count: number; lastAttempt: number }>();
  
  return (identifier: string, maxAttempts: number = 5, windowMs: number = 300000): boolean => {
    const now = Date.now();
    const userAttempts = attempts.get(identifier);
    
    if (!userAttempts) {
      attempts.set(identifier, { count: 1, lastAttempt: now });
      return true;
    }
    
    if (now - userAttempts.lastAttempt > windowMs) {
      attempts.set(identifier, { count: 1, lastAttempt: now });
      return true;
    }
    
    if (userAttempts.count >= maxAttempts) {
      return false;
    }
    
    userAttempts.count++;
    userAttempts.lastAttempt = now;
    return true;
  };
})();

export const escapeHtml = (text: string): string => {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
};

export const generateCSRFToken = (): string => {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
};

export const validateCSRFToken = (token: string, storedToken: string): boolean => {
  return token === storedToken && token.length === 64;
};