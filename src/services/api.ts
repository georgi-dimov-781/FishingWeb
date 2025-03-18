import axios, { 
  AxiosInstance, 
  AxiosRequestConfig, 
  AxiosResponse, 
  AxiosError,
  InternalAxiosRequestConfig
} from 'axios';
import { ApiResponse, PaginatedResponse } from '../types';

/**
 * ApiService class handles all HTTP requests to the backend API
 * Implements Singleton pattern to ensure only one instance exists
 */
class ApiService {
  private api: AxiosInstance;
  private static instance: ApiService;

  /**
   * Private constructor to prevent direct instantiation
   * Initializes axios instance with base configuration
   */
  private constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3000/api',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.setupInterceptors();
  }

  /**
   * Returns the singleton instance of ApiService
   * Creates new instance if one doesn't exist
   */
  public static getInstance(): ApiService {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService();
    }
    return ApiService.instance;
  }

  /**
   * Sets up request and response interceptors
   * - Request interceptor adds authentication token
   * - Response interceptor handles unauthorized access
   */
  private setupInterceptors(): void {
    // Request interceptor - adds auth token to requests
    this.api.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        const token = localStorage.getItem('token');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      }
    );

    // Response interceptor - handles auth errors
    this.api.interceptors.response.use(
      (response: AxiosResponse) => response,
      (error: AxiosError) => {
        if (error.response?.status === 401) {
          // Handle unauthorized access by clearing token and redirecting
          localStorage.removeItem('token');
          window.location.href = '/login';
        }
        return Promise.reject(error);
      }
    );
  }

  /**
   * Generic request method that handles all HTTP requests
   * Includes error handling and response formatting
   */
  private async request<T>(
    config: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    try {
      const response: AxiosResponse<ApiResponse<T>> = await this.api.request(config);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return {
          success: false,
          error: error.response?.data?.error || 'An error occurred',
        };
      }
      return {
        success: false,
        error: 'An unexpected error occurred',
      };
    }
  }

  /**
   * Performs a GET request
   * @param url - The endpoint URL
   * @param config - Additional axios configuration
   */
  public async get<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    return this.request<T>({ ...config, method: 'GET', url });
  }

  /**
   * Performs a POST request
   * @param url - The endpoint URL
   * @param data - The request body
   * @param config - Additional axios configuration
   */
  public async post<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    return this.request<T>({ ...config, method: 'POST', url, data });
  }

  /**
   * Performs a PUT request
   * @param url - The endpoint URL
   * @param data - The request body
   * @param config - Additional axios configuration
   */
  public async put<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    return this.request<T>({ ...config, method: 'PUT', url, data });
  }

  /**
   * Performs a DELETE request
   * @param url - The endpoint URL
   * @param config - Additional axios configuration
   */
  public async delete<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    return this.request<T>({ ...config, method: 'DELETE', url });
  }

  /**
   * Performs a paginated GET request
   * @param url - The endpoint URL
   * @param params - Query parameters for pagination
   * @param config - Additional axios configuration
   */
  public async getPaginated<T>(
    url: string,
    params?: Record<string, unknown>,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<PaginatedResponse<T>>> {
    return this.get<PaginatedResponse<T>>(url, { ...config, params });
  }
}

// Export singleton instance
export const api = ApiService.getInstance(); 